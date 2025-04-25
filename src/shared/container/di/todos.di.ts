import CreateTodoUseCase from "@modules/todos/use-cases/create-todo/create-todo.use-case";
import container from "./base.di";

container
  .bind<CreateTodoUseCase>(CreateTodoUseCase)
  .toSelf()
  .inSingletonScope();
