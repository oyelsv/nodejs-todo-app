import jwt from 'jsonwebtoken';

export const protector = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: 'not authorized' });

    return;
  }

  const [, token] = bearer.split(' ');

  if (!token) {
    res.status(401);
    res.json({ message: 'not authorized' });

    return;
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (e) {
    console.error(e);

    res.status(401);
    res.json({ message: 'not valid token' });
  }
};
