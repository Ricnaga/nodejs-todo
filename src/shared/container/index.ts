import InMemoryTokenRepository from "@modules/users/repositories/in-memory/token-repository.in-memory";
import InMemoryUsersRepository from "@modules/users/repositories/in-memory/users-repository.in-memory";
import ITokenRepository from "@modules/users/repositories/token.interface";
import IUsersRepository from "@modules/users/repositories/users.interface";
import CreateTokenUseCase from "@modules/users/use-cases/create-token/create-token.use-case";
import CreateUserUseCase from "@modules/users/use-cases/create-user/create-user.use-case";
import ListUserUseCase from "@modules/users/use-cases/list-user/list-user.use-case";
import UpdateUserUseCase from "@modules/users/use-cases/update-user/update-user.use-case";
import { Container } from "inversify";
import {
  hashProviderId,
  todosRepositoryId,
  tokenRepositoryId,
  usersRepositoryId,
} from "./container.types";
import BCryptHashProvider from "./providers/HashProvider/implementations/bcrypt-hash.provider";
import IHashProvider from "./providers/HashProvider/models/hash-provider.interface";
import ITodosRepository from "@modules/todos/repositories/todos.interface";
import InMemoryTodosRepository from "@modules/todos/repositories/in-memory/todos-repository.in-memory";
import CreateTodoUseCase from "@modules/todos/use-cases/create-todo/create-todo.use-case";

const container = new Container();

container
  .bind<IUsersRepository>(usersRepositoryId)
  .to(InMemoryUsersRepository)
  .inSingletonScope();

container
  .bind<ITokenRepository>(tokenRepositoryId)
  .to(InMemoryTokenRepository)
  .inSingletonScope();

container
  .bind<ITodosRepository>(todosRepositoryId)
  .to(InMemoryTodosRepository)
  .inSingletonScope();

container
  .bind<IHashProvider>(hashProviderId)
  .to(BCryptHashProvider)
  .inSingletonScope();

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

container
  .bind<CreateTodoUseCase>(CreateTodoUseCase)
  .toSelf()
  .inSingletonScope();

export default container;
