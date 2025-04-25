import CreateTodoUseCase from "@modules/todos/use-cases/create-todo/create-todo.use-case";
import container from "./base.di";
import ListTodosUseCase from "@modules/todos/use-cases/list-todo/list-todo.use-case";
import UpdateTodosUseCase from "@modules/todos/use-cases/update-todo/update-todo.use-case";

container
  .bind<CreateTodoUseCase>(CreateTodoUseCase)
  .toSelf()
  .inSingletonScope();

container.bind<ListTodosUseCase>(ListTodosUseCase).toSelf().inSingletonScope();

container
  .bind<UpdateTodosUseCase>(UpdateTodosUseCase)
  .toSelf()
  .inSingletonScope();
