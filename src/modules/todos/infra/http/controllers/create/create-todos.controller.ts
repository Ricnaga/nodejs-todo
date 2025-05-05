import { NextFunction, Request, Response } from 'express';

import CreateTodoUseCase from '@modules/todos/use-cases/create-todo/create-todo.use-case';

import container from '@shared/container';

import { createTodoBodySchema } from './create-todos.schema';

export default class CreateTodoController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    const body = createTodoBodySchema.parse(request.body);
    const { user } = request;

    try {
      const createTodoUseCase =
        await container.getAsync<CreateTodoUseCase>(CreateTodoUseCase);

      await createTodoUseCase.execute({ ...body, userId: user.id });

      response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
