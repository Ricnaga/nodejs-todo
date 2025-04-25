import User from "@modules/users/entities/user.entity";
import IUsersRepository from "@modules/users/repositories/users.interface";
import { usersRepositoryId } from "@shared/container/di/types";
import AppError from "@shared/errors/app.error";
import { inject, injectable } from "inversify";

interface IRequest {
  user: User;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject(usersRepositoryId)
    private readonly usersRepository: IUsersRepository
  ) {}
  public async execute(data: IRequest): Promise<User> {
    const userFound = await this.usersRepository.findById(data.user.id);

    if (!userFound) {
      throw new AppError("Usuário não foi encontrado", 404);
    }

    const updatedUser = await this.usersRepository.update(data);

    return updatedUser
  }
}

export default UpdateUserUseCase;
