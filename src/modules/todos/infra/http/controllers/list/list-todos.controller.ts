import { NextFunction, Request, Response } from 'express';

import ListTodosUseCase from '@modules/todos/use-cases/list-todo/list-todo.use-case';

import container from '@shared/container';

export default class ListTodoController {
  public async list(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const listTodosUseCase =
        await container.getAsync<ListTodosUseCase>(ListTodosUseCase);

      const todos = await listTodosUseCase.execute({ userId: request.user.id });

      response.status(200).json({ todos });
    } catch (error) {
      next(error);
    }
  }
}
