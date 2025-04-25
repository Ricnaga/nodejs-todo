import CreateTodoUseCase from "@modules/todos/use-cases/create-todo/create-todo.use-case";
import container from "./base.di";
import ListTodosUseCase from "@modules/todos/use-cases/list-todo/list-todo.use-case";

container
  .bind<CreateTodoUseCase>(CreateTodoUseCase)
  .toSelf()
  .inSingletonScope();

container.bind<ListTodosUseCase>(ListTodosUseCase).toSelf().inSingletonScope();
