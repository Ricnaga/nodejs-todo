import CreateTodoDTO from "@modules/users/dtos/users/user.dto";
import ListTodoDTO from "../dtos/list-user.dto";
import EditTodoDTO from "../dtos/edit-user.dto";
import DeleteTodoDTO from "../dtos/delete-user.dto";

export default interface ITodosRepository {
  list: (data: ListTodoDTO) => void;
  create: (data: CreateTodoDTO) => void;
  edit: (data: EditTodoDTO) => void;
  delete: (data: DeleteTodoDTO) => void;
}
