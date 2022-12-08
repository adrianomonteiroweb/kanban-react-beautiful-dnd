import { app } from './app';
import cors from 'cors';
import routes from './routes';

const server = require('http').createServer(app);

app.use(cors());

app.use(routes);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket: any) => {
  console.log(`${socket.id} user just connected`);
  socket.on('disconnect', () => {
    socket.disconnect();
    console.log('A user disconnected');
  });
});

server.listen(4000, () => console.log('OK'));
