import { NextFunction, Request, Response } from 'express';

import CreateTokenUseCase from '@modules/users/use-cases/create-token/create-token.use-case';

import container from '@shared/container';

import { loginBodySchema } from './login.schema';

export default class LoginController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const body = loginBodySchema.parse(request.body);

    try {
      const createTokenUseCase =
        await container.getAsync<CreateTokenUseCase>(CreateTokenUseCase);

      const { token } = await createTokenUseCase.execute(body);

      response.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
