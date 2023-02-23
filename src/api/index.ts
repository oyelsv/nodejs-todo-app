import { Router } from 'express';

import { todosRouter } from 'api/v1/todos';

export const apiRouter = Router()
  /**/
  .use('/todos', todosRouter);
