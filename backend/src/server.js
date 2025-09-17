import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import {clerkMiddleware} from '@clerk/express';
const app = express();

app.use(cors())
app.use(express.json());
app.use(clerkMiddleware());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', require('./routes/userRoutes.js'));
app.use('/api/posts', require('./routes/postRoutes.js'));

app.listen(ENV.PORT, () => {
  console.log('Server is running on port', ENV.PORT)
});