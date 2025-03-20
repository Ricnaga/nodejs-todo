import AppError from "@shared/errors/app.error";
import { injectable } from "inversify";

interface IRequest {
  id: string;
  email: string;
  username: string;
  password: string;
}

@injectable()
class UpdateUserUseCase {
  public async execute(data: IRequest): Promise<void> {
    throw new AppError("Verifique seus dados novamente");
  }
}

export default UpdateUserUseCase;
