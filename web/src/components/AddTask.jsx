import { useState } from 'react';

export const AddTask = () => {
  const [task, setTask] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    //👇🏻 Logs the task to the console
    console.log({ task });
    setTask('');
  };

  return (
    <form className='form__input' onSubmit={handleAddTodo}>
      <label htmlFor='task'>Add Todo</label>
      <input
        type='text'
        name='task'
        id='task'
        value={task}
        className='input'
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='addTodoBtn'>ADD TODO</button>
    </form>
  );
};
