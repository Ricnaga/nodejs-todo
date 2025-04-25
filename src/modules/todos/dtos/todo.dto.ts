import Todos from "../entities/todos.entity";

export interface CreateTodoDTO {
  todo: Omit<Todos, "id">;
}

export interface UpdateTodoDTO {
  todo: Todos;
}
