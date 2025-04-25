import DeleteTodoDTO from "@modules/todos/dtos/delete-todo.dto";
import EditTodoDTO from "@modules/todos/dtos/edit-todo.dto";
import ListTodoDTO from "@modules/todos/dtos/list-todo.dto";
import CreateTodoDTO from "@modules/todos/dtos/todo.dto";
import Todos from "@modules/todos/entities/todos.entity";
import { injectable } from "inversify";
import { v4 } from "uuid";
import ITodosRepository from "../todos.interface";

@injectable()
export default class InMemoryTodosRepository implements ITodosRepository {
  private todos: Array<Todos> = [];

  public async create(data: CreateTodoDTO): Promise<void> {
    this.todos.push({ ...data.todo, id: v4() });
  }

  public async findByUserId(userId: string): Promise<Todos | undefined> {
    return this.todos.find((todo) => todo.userId === userId);
  }

  list(data: ListTodoDTO): void {
    throw new Error("Method not implemented.");
  }
  edit(data: EditTodoDTO): void {
    throw new Error("Method not implemented.");
  }
  delete(data: DeleteTodoDTO): void {
    throw new Error("Method not implemented.");
  }
}
