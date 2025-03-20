import AppError from "@shared/errors/app.error";
import { injectable } from "inversify";

interface IRequest {
  email: string;
  username: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  public async execute(data: IRequest): Promise<void> {
    throw new AppError("Username/email ja foram cadastrados");
  }
}

export default CreateUserUseCase;
