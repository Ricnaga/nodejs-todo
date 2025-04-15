import IUsersRepository from "@modules/users/repositories/users.interface";
import { usersRepositoryId } from "@shared/container/container.types";
import AppError from "@shared/errors/app.error";
import { inject, injectable } from "inversify";

interface IRequest {
  email: string;
  username: string;
  password: string;
}

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject(usersRepositoryId)
    private readonly usersRepository: IUsersRepository
  ) {}

  public async execute(data: IRequest): Promise<void> {
    const userFoundByEmail = await this.usersRepository.findByEmail(data.email);
    const userFoundByUsername = await this.usersRepository.findByUsername(
      data.username
    );

    if (userFoundByEmail || userFoundByUsername) {
      throw new AppError("Username/email ja foram cadastrados");
    }

    await this.usersRepository.create({ user: data });
  }
}
