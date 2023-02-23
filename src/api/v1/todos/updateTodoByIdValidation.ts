import { Response, NextFunction, Request } from 'express';
import * as Yup from 'yup';

export const updateTodoByIdValidation = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const { title, description } = req.body;

  try {
    await Yup.object({
      title: Yup.string().min(1),
      description: Yup.string().min(1),
    }).validate({
      title,
      description,
    });

    return next();
  } catch (err) {
    return res.status(400).json({ type: err?.name, message: err?.message });
  }
};
