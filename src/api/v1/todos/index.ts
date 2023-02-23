import { Router } from 'express';

/* @Validation */
import { createTodoValidation } from './createTodoValidation';
import { updateTodoByIdValidation } from './updateTodoByIdValidation';

/* @Handlers */
import {
  handleCreateTodo,
  handleGetTodoById,
  handleUpdateTodoById,
  handleDeleteTodoByIds,
  handleGetAllTodosByUser,
} from 'controllers/todos';

/*
 * Todos API router
 * rootPath: /api/v1/todos/...
 *
 * GET: /api/v1/todos - get all todos by user
 * GET: /api/v1/todos/:id - get todo by id
 * POST: /api/v1/todos - create todo
 * PUT: /api/v1/todos/:id - update todo
 * DEL: /api/v1/todos/:id - delete todo by id
 * */
export const todosRouter = Router()
  .get('/', handleGetAllTodosByUser)
  .get('/:id', handleGetTodoById)
  .post('/', createTodoValidation, handleCreateTodo)
  .put('/:id', updateTodoByIdValidation, handleUpdateTodoById)
  .delete('/', handleDeleteTodoByIds);
