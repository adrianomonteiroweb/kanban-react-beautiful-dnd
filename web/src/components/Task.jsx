import socketIO from 'socket.io-client';

import { Nav } from './Nav';

const socket = socketIO.connect('http://localhost:3000');

export const Task = () => {
  console.log(socket);
  return (
    <div>
      <Nav />
    </div>
  );
};
