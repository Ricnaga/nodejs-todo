import { inject, injectable } from 'inversify';

import IUsersRepository from '@modules/users/repositories/users.interface';

import { usersRepositoryId } from '@shared/container/di/types';
import AppError from '@shared/errors/app.error';

import { ListUserUseCaseRequest } from './list-user.schema';

interface IResponse {
  username: string;
  id: string;
}

@injectable()
export default class ListUserUseCase {
  constructor(
    @inject(usersRepositoryId)
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute(data: ListUserUseCaseRequest): Promise<IResponse> {
    if (!data.id)
      throw new AppError(
        'Você não possui informações desse usuário para listagem',
        404,
      );

    const userFound = await this.usersRepository.findById(data.id);

    if (!userFound)
      throw new AppError(
        'Você não possui informações desse usuário para listagem',
        404,
      );

    return { id: userFound.id, username: userFound.username };
  }
}
