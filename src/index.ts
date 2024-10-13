import express from 'express';

import { config } from '@/config';
import { todo } from '@/mocks/todos';

const app = express();

app.get('/todos', (_, res) => {
  res.json(todo);
});

app.listen(config.port);
