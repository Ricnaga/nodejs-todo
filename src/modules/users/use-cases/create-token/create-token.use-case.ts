import ITokenRepository from "@modules/users/repositories/token.interface";
import IUsersRepository from "@modules/users/repositories/users.interface";
import {
  hashProviderId,
  tokenRepositoryId,
  usersRepositoryId,
} from "@shared/container/di/types";
import IHashProvider from "@shared/container/providers/HashProvider/models/hash-provider.interface";
import AppError from "@shared/errors/app.error";
import { inject, injectable } from "inversify";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  token: string;
}

@injectable()
class CreateTokenUseCase {
  constructor(
    @inject(usersRepositoryId)
    private readonly usersRepository: IUsersRepository,
    @inject(tokenRepositoryId)
    private readonly tokenRepository: ITokenRepository,
    @inject(hashProviderId)
    private readonly hashProvider: IHashProvider
  ) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const userFound = await this.usersRepository.findByUsername(data.username);

    if (!userFound) {
      throw new AppError("Username e/ou senha estão incorretos");
    }

    const isValidPassword = await this.hashProvider.compareHash(
      data.password,
      userFound.password
    );

    if (!isValidPassword) {
      throw new AppError("Username e/ou senha estão incorretos");
    }

    const token = await this.tokenRepository.create(userFound.id);

    return { token };
  }
}

export default CreateTokenUseCase;
