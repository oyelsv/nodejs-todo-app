import { Request, Response } from 'express';

import { prisma } from 'config/db';

export const handleCreateTodo = async (req: Request, res: Response): Promise<void> => {
  const { id: userId } = req.user;
  const { title, description = '' } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        userId,
        title,
        description,
      },
    });

    res.json({ todo: todo || {} });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const handleUpdateTodoById = async (req: Request, res: Response): Promise<void> => {
  const { id: userId } = req.user;
  const { id: todoId } = req.params;
  const { title, description } = req.body;

  try {
    const todo = await prisma.todo.update({
      where: {
        id_userId: {
          id: todoId,
          userId,
        },
      },
      data: {
        title,
        description,
      },
    });

    res.json({ todo: todo || {} });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const handleGetTodoById = async (req: Request, res: Response): Promise<void> => {
  const { id: userId } = req.user;
  const { id: todoId } = req.params;

  try {
    const todo = await prisma.todo.findFirst({
      where: {
        id: todoId,
        userId,
      },
    });

    res.json({ todo: todo || {} });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const handleGetAllTodosByUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.user;

  try {
    const { todos } = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        todos: true,
      },
    });

    res.status(200).json({ todos });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const handleDeleteTodoByIds = async (req: Request, res: Response): Promise<void> => {
  const { id: userId } = req.user;
  const { ids }: { ids: string[] } = req.body;

  try {
    const deletedTodos = await prisma.todo.findMany({
      where: {
        id: { in: ids },
        userId,
      },
    });

    await prisma.todo.deleteMany({
      where: {
        id: { in: ids },
        userId,
      },
    });

    res.json({ deletedTodos });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  } finally {
    await prisma.$disconnect();
  }
};
