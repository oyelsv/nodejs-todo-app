import jwt from 'jsonwebtoken';

export const createJWT = (user: { id: string; username: string }): string =>
  jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
