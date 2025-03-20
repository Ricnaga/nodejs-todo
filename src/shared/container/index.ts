import CreateTokenUseCase from "@modules/users/use-cases/create-token/create-token.use-case";
import CreateUserUseCase from "@modules/users/use-cases/create-user/create-user.use-case";
import UpdateUserUseCase from "@modules/users/use-cases/update-user/update-user.use-case";
import { Container } from "inversify";

const container = new Container();

container
  .bind<CreateUserUseCase>(CreateUserUseCase)
  .toSelf()
  .inSingletonScope();

container
  .bind<CreateTokenUseCase>(CreateTokenUseCase)
  .toSelf()
  .inSingletonScope();

container
  .bind<UpdateUserUseCase>(UpdateUserUseCase)
  .toSelf()
  .inSingletonScope();

export default container;
