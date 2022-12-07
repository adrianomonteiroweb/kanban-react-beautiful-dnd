import { app } from './app';
import cors from 'cors';

const server = require('http').createServer(app);

app.use(cors());

const io = require('socket.io')(server);

io.on('connection', (socket: any) => {
  console.log(`${socket.id} user just connected`);
  socket.on('disconnect', () => {
    socket.disconnect();
    console.log('A user disconnected');
  });
});

server.listen(3001, () => console.log('OK'));
