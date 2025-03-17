import CreateUserUseCase from "@modules/users/use-cases/create-user.use-case";
import { Container } from "inversify";

const container = new Container();

container
  .bind<CreateUserUseCase>(CreateUserUseCase)
  .toSelf()
  .inSingletonScope();

export default container;
