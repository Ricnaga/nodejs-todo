import AppError from "@shared/errors/app.error";
import { injectable } from "inversify";

@injectable()
class CreateTodosUseCase {
  public async execute(): Promise<void> {
    throw new AppError("AN ERROR");
  }
}

export default CreateTodosUseCase;
