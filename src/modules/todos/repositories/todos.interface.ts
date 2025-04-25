import ListTodoDTO from "../dtos/list-todo.dto";
import EditTodoDTO from "../dtos/edit-todo.dto";
import DeleteTodoDTO from "../dtos/delete-todo.dto";
import CreateTodoDTO from "../dtos/todo.dto";
import Todos from "../entities/todos.entity";

export default interface ITodosRepository {
  create(data: CreateTodoDTO): Promise<void>;
  findByUserId(userId: string): Promise<Todos | undefined>;
  list(data: ListTodoDTO): void;
  edit(data: EditTodoDTO): void;
  delete(data: DeleteTodoDTO): void;
}
