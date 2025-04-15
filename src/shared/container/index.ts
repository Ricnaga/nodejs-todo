import InMemoryUsersRepository from "@modules/users/repositories/in-memory/users-repository.in-memory";
import IUsersRepository from "@modules/users/repositories/users.interface";
import CreateUserUseCase from "@modules/users/use-cases/create-user/create-user.use-case";
import { Container } from "inversify";
import { usersRepositoryId } from "./container.types";

const container = new Container();

container
  .bind<IUsersRepository>(usersRepositoryId)
  .to(InMemoryUsersRepository)
  .inSingletonScope();

container
  .bind<CreateUserUseCase>(CreateUserUseCase)
  .toSelf()
  .inSingletonScope();

export default container;
