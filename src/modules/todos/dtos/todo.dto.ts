import Todos from "../entities/todos.entity";

export default interface CreateTodoDTO {
  todo: Omit<Todos, "id">;
}
