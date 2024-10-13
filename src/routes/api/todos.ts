import express from 'express';

import { todo } from '@/mocks/todos';

const router = express.Router();

router.get('/', (_, res, next) => {
  try {
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

export default router;
