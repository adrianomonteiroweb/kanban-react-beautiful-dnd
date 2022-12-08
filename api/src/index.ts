import { app } from './app';
import cors from 'cors';
import { Server } from 'socket.io';

import { tasks } from './data/tasks';

import routes from './routes';

const server = require('http').createServer(app);

app.use(cors());

app.use(routes);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket: any) => {
  console.log(`${socket.id} user just connected`);

  socket.on('taskDragged', (data: any) => {
    const { source, destination } = data;

    //👇🏻 Gets the item that was dragged
    const itemMoved = {
      ...tasks[source.droppableId].items[source.index],
    };
    console.log('DraggedItem>>> ', itemMoved);

    //👇🏻 Removes the item from the its source
    tasks[source.droppableId].items.splice(source.index, 1);

    //👇🏻 Add the item to its destination using its destination index
    tasks[destination.droppableId].items.splice(
      destination.index,
      0,
      itemMoved
    );

    //👇🏻 Sends the updated tasks object to the React app
    socket.emit('tasks', tasks);
  });

  socket.on('disconnect', () => {
    socket.disconnect();
    console.log('A user disconnected');
  });
});

server.listen(4000, () => console.log('OK'));
