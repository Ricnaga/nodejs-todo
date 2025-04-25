import EditTodoDTO from "../dtos/edit-todo.dto";
import DeleteTodoDTO from "../dtos/delete-todo.dto";
import CreateTodoDTO from "../dtos/todo.dto";
import Todos from "../entities/todos.entity";

export default interface ITodosRepository {
  create(data: CreateTodoDTO): Promise<void>;
  list(userId: string): Promise<Array<Todos>>;
  edit(data: EditTodoDTO): void;
  delete(data: DeleteTodoDTO): void;
}
