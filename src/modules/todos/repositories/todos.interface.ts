import ListTodoDTO from "../dtos/list-todo.dto";
import EditTodoDTO from "../dtos/edit-todo.dto";
import DeleteTodoDTO from "../dtos/delete-todo.dto";
import CreateTodoDTO from "../dtos/create-todo.dto";

export default interface ITodosRepository {
  list(data: ListTodoDTO): void;
  create(data: CreateTodoDTO): void;
  edit(data: EditTodoDTO): void;
  delete(data: DeleteTodoDTO): void;
}
