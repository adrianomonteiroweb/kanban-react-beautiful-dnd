import http from 'http';
import cors from 'cors';

import { app } from './app';

new http.Server(app);

app.use(cors());

app.listen(3001, () => console.log('OK'));
