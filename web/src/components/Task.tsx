import { io, Socket } from 'socket.io-client';

import { Nav } from './Nav';
import { AddTask } from './AddTask';
import { TasksContainer } from './TasksContainer';

const socket: Socket = io('http://localhost:4000');

export const Task = () => {
  console.log(socket);
  return (
    <div>
      <Nav />
      <AddTask />
      <TasksContainer />
    </div>
  );
};
