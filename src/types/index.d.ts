import { Request } from 'express';

declare global {
  namespace Express {
    // eslint-disable-next-line no-shadow
    interface Request {
      user?: { id?: string };
    }
  }
}
