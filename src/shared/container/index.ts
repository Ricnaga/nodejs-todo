import InMemoryUsersRepository from "@modules/users/repositories/in-memory/users-repository.in-memory";
import IUsersRepository from "@modules/users/repositories/users.interface";
// import CreateTokenUseCase from "@modules/users/use-cases/create-token/create-token.use-case";
import CreateUserUseCase from "@modules/users/use-cases/create-user/create-user.use-case";
// import UpdateUserUseCase from "@modules/users/use-cases/update-user/update-user.use-case";
import { Container } from "inversify";

const container = new Container();

export const usersRepositoryId: symbol = Symbol.for("UsersRepositoryId");

container
  .bind<IUsersRepository>(usersRepositoryId)
  .to(InMemoryUsersRepository)
  .inSingletonScope();

container
  .bind<CreateUserUseCase>(CreateUserUseCase)
  .toSelf()
  .inSingletonScope();

// container
//   .bind<CreateTokenUseCase>(CreateTokenUseCase)
//   .toSelf()
//   .inSingletonScope();

// container
//   .bind<UpdateUserUseCase>(UpdateUserUseCase)
//   .toSelf()
//   .inSingletonScope();

export default container;
