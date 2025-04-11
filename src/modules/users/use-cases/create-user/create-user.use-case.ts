import IUsersRepository from "@modules/users/repositories/users.interface";
import { usersRepositoryId } from "@shared/container";
import AppError from "@shared/errors/app.error";
import { inject, injectable } from "inversify";

interface IRequest {
  email: string;
  username: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject(usersRepositoryId)
    private readonly usersRepository: IUsersRepository
  ) {}

  public async execute(data: IRequest): Promise<void> {
    await this.usersRepository.create(data);
    throw new AppError("Username/email ja foram cadastrados");
  }
}

export default CreateUserUseCase;
