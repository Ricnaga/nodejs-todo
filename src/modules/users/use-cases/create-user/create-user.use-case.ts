import IUsersRepository from "@modules/users/repositories/users.interface";
import {
  hashProviderId,
  usersRepositoryId,
} from "@shared/container/container.types";
import IHashProvider from "@shared/container/providers/HashProvider/models/hash-provider.interface";
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
    private readonly usersRepository: IUsersRepository,
    @inject(hashProviderId)
    private readonly hashProvider: IHashProvider
  ) {}

  public async execute(data: IRequest): Promise<void> {
    const userFoundByEmail = await this.usersRepository.findByEmail(data.email);
    const userFoundByUsername = await this.usersRepository.findByUsername(
      data.username
    );

    if (userFoundByEmail || userFoundByUsername) {
      throw new AppError("Username/email ja foram cadastrados");
    }

    const hashPassword = await this.hashProvider.createHash(data.password);

    await this.usersRepository.create({
      user: { ...data, password: hashPassword },
    });
  }
}
