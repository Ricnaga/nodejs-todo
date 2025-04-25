import { CreateTodoDTO, UpdateTodoDTO } from "../dtos/todo.dto";
import Todos from "../entities/todos.entity";

export default interface ITodosRepository {
  create(data: CreateTodoDTO): Promise<void>;
  list(userId: string): Promise<Array<Todos>>;
  update(data: UpdateTodoDTO): Promise<void>;
  remove(todoId: string): Promise<void>;
  findById(todoId: string): Promise<Todos | undefined>;
}
