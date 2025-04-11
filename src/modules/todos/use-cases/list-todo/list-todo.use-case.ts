import AppError from "@shared/errors/app.error";
import { injectable } from "inversify";

@injectable()
class ListTodosUseCase {
  public async execute(): Promise<void> {
    throw new AppError("AN ERROR");
  }
}

export default ListTodosUseCase;
