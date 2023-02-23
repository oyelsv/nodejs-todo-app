import express, { Application } from 'express';
import morgan from 'morgan';

import { cacheDisablerMiddleware, protectorMiddleware } from 'middleware';

import { apiRouter } from 'api';
import { authRoutes } from 'api/v1/auth';

const app: Application = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

/* middlewares */
app.use([
  cacheDisablerMiddleware,
  express.json(),
  express.urlencoded({
    extended: true,
  }),
]);

app.get('/', (req, res) => {
  console.log('hello from express');

  res.status(200).json({ message: 'hello!' });
});

app.use('/api', protectorMiddleware, apiRouter);
app.use('/auth', authRoutes);

export default app;
