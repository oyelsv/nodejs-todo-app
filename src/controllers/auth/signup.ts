import { Request, Response } from 'express';

import { prisma } from 'config/db';
import { createJWT, useHashPassword } from 'utils/auth';

export const handleSignup = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email } = req.body;
  const hash = await useHashPassword(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hash,
    },
  });

  const token = createJWT(user);

  res.json({ token });
};
