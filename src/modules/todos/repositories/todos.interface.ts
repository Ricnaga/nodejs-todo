import DeleteTodoDTO from "../dtos/delete-todo.dto";
import { CreateTodoDTO, UpdateTodoDTO } from "../dtos/todo.dto";
import Todos from "../entities/todos.entity";

export default interface ITodosRepository {
  create(data: CreateTodoDTO): Promise<void>;
  list(userId: string): Promise<Array<Todos>>;
  update(data: UpdateTodoDTO): Promise<void>;
  delete(data: DeleteTodoDTO): Promise<void>;
}
