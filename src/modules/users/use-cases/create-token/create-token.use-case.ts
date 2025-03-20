import AppError from "@shared/errors/app.error";
import { injectable } from "inversify";

interface IRequest {
  username: string;
  password: string;
}

@injectable()
class CreateTokenUseCase {
  public async execute(data: IRequest): Promise<void> {
    throw new AppError("Username e/ou senha estão incorretos");
  }
}

export default CreateTokenUseCase;
