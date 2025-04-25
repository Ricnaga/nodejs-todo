import InMemoryTodosRepository from "@modules/todos/repositories/in-memory/todos-repository.in-memory";
import ITodosRepository from "@modules/todos/repositories/todos.interface";
import InMemoryTokenRepository from "@modules/users/repositories/in-memory/token-repository.in-memory";
import InMemoryUsersRepository from "@modules/users/repositories/in-memory/users-repository.in-memory";
import ITokenRepository from "@modules/users/repositories/token.interface";
import IUsersRepository from "@modules/users/repositories/users.interface";
import {
  usersRepositoryId,
  tokenRepositoryId,
  todosRepositoryId,
  hashProviderId,
} from "./types";
import BCryptHashProvider from "../providers/HashProvider/implementations/bcrypt-hash.provider";
import IHashProvider from "../providers/HashProvider/models/hash-provider.interface";
import { Container } from "inversify";

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

export default container;
