import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './tasksContainer.css';

export const TasksContainer = () => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    (() => {
      fetch('http://localhost:4000/api')
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
        });
    })();
  }, []);

  function handleDragEnd() {}

  return (
    <div className='container'>
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(tasks).map((task: any) => (
          <div
            className={`${task[1].title.toLowerCase()}__wrapper`}
            key={task[1].title}
          >
            <h3>{task[1].title} Tasks</h3>
            <div className={`${task[1].title.toLowerCase()}__container`}>
              <Droppable droppableId={task[1].title}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {task[1].items.map((item: any, index: any) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${task[1].title.toLowerCase()}__items`}
                          >
                            <p>{item.title}</p>
                            <p className='comment'>
                              <Link
                                to={`/comments/${task[1].title}/${item.id}`}
                              >
                                {item.comments.length > 0
                                  ? `View Comments`
                                  : 'Add Comment'}
                              </Link>
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};
