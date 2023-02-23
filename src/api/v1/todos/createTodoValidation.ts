import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

export const createTodoValidation = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const { title, description = '' } = req.body;

  try {
    await Yup.object({
      title: Yup.string().required().max(50),
      description: Yup.string().max(355),
    }).validate({
      title,
      description,
    });

    return next();
  } catch (err) {
    return res.status(400).json({ type: err.name, message: err.message });
  }
};
