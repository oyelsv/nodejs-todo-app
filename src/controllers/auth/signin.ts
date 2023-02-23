import { Request, Response } from 'express';

import { prisma } from 'config/db';
import { createJWT, usePasswordComparator } from 'utils/auth';

export const handleSignin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const isEqualPasswords = await usePasswordComparator(password, user.password);

  if (!isEqualPasswords) {
    res.status(401).json({ message: 'Invalid credentials' });

    return;
  }

  const token = createJWT(user);

  res.json({ token });
};
