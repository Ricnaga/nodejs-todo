import { NextFunction, Request, Response } from 'express';

import UpdateTodosUseCase from '@modules/todos/use-cases/update-todo/update-todo.use-case';

import container from '@shared/container';

import {
  updateTodoBodySchema,
  updateTodoParamsSchema,
} from './update-todos.schema';

export default class UpdateTodoController {
  public async update(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const body = updateTodoBodySchema.parse(request.body);
      const { id } = updateTodoParamsSchema.parse(request.params);
      const { id: userId } = request.user;

      const updateTodosUseCase =
        await container.getAsync<UpdateTodosUseCase>(UpdateTodosUseCase);

      await updateTodosUseCase.execute({
        ...body,
        id,
        userId,
      });

      response.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}
