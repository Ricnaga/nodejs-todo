import { NextFunction, Request, Response } from 'express';

import ListUserUseCase from '@modules/users/use-cases/list-user/list-user.use-case';

import container from '@shared/container';

export default class MeController {
  public async list(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const listUserUseCase =
        await container.getAsync<ListUserUseCase>(ListUserUseCase);

      const user = await listUserUseCase.execute({ id: request.user.id });

      return response.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }
}
