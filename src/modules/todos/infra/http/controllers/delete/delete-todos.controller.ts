import { NextFunction, Request, Response } from 'express';

import DeleteTodosUseCase from '@modules/todos/use-cases/delete-todo/delete-todo.use-case';

import container from '@shared/container';

import { deleteTodoParamsSchema } from './delete-todos.schema';

export default class DeleteTodoController {
  public async delete(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = deleteTodoParamsSchema.parse(request.params);

      const deleteTodosUseCase =
        await container.getAsync<DeleteTodosUseCase>(DeleteTodosUseCase);

      await deleteTodosUseCase.execute({ id });

      return response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
