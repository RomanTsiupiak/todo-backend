import express from 'express';
import cors from 'cors';

import todoRouter from '@/routes/api/todos';
import { ErrorHandler } from './utils';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todo', todoRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use(ErrorHandler);

export default app;
