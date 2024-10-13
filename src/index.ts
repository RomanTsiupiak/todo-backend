import express from 'express';
import cors from 'cors';

import { config } from '@/config';
import { todo } from '@/mocks/todos';

const app = express();

app.use(cors());

app.get('/todos', (_, res) => {
  res.json(todo);
});

app.listen(config.port);
