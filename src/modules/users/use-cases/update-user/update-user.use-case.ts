import { inject, injectable } from 'inversify';

import IUsersRepository from '@modules/users/repositories/users.interface';

import { usersRepositoryId } from '@shared/container/di/types';
import AppError from '@shared/errors/app.error';

import {
  UpdateUserUseCaseRequest,
  UpdateUserUseCaseResponse,
} from './update-user.schema';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject(usersRepositoryId)
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute(
    data: UpdateUserUseCaseRequest,
  ): Promise<UpdateUserUseCaseResponse> {
    const userFound = await this.usersRepository.findById(data.user.id);

    if (!userFound) {
      throw new AppError('Usuário não foi encontrado', 404);
    }

    const updatedUser = await this.usersRepository.update(data);

    return updatedUser;
  }
}

export default UpdateUserUseCase;
