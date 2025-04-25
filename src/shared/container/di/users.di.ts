import CreateTokenUseCase from "@modules/users/use-cases/create-token/create-token.use-case";
import CreateUserUseCase from "@modules/users/use-cases/create-user/create-user.use-case";
import ListUserUseCase from "@modules/users/use-cases/list-user/list-user.use-case";
import UpdateUserUseCase from "@modules/users/use-cases/update-user/update-user.use-case";
import container from "./base.di";

container
  .bind<CreateUserUseCase>(CreateUserUseCase)
  .toSelf()
  .inSingletonScope();

container
  .bind<CreateTokenUseCase>(CreateTokenUseCase)
  .toSelf()
  .inSingletonScope();

container.bind<ListUserUseCase>(ListUserUseCase).toSelf().inSingletonScope();

container
  .bind<UpdateUserUseCase>(UpdateUserUseCase)
  .toSelf()
  .inSingletonScope();
