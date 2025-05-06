import { NextFunction, Request, Response } from 'express';

import UpdateUserUseCase from '@modules/users/use-cases/update-user/update-user.use-case';

import container from '@shared/container';

import {
  updateUsersBodySchema,
  updateUsersParamsSchema,
} from './update.schema';

export default class UpdateController {
  public async update(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const body = updateUsersBodySchema.parse(request.body);
    const { id } = updateUsersParamsSchema.parse(request.params);

    const data = { ...body, id };

    try {
      const updateUserUseCase =
        await container.getAsync<UpdateUserUseCase>(UpdateUserUseCase);

      const updatedUser = await updateUserUseCase.execute({ user: data });

      return response.status(200).json({ user: updatedUser });
    } catch (error) {
      next(error);
    }
  }
}
