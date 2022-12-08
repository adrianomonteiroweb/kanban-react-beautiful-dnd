import { useState } from 'react';

import './addTask.css';

export const AddTask = () => {
  const [task, setTask] = useState('');

  const handleAddTodo = (event: any) => {
    event.preventDefault();

    setTask('');
  };

  return (
    <form className='form__input' onSubmit={handleAddTodo}>
      <input
        type='text'
        name='task'
        id='task'
        value={task}
        className='input'
        placeholder='New Task'
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='addTodoBtn'>ADD TASK</button>
    </form>
  );
};
