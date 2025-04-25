import Todos from "@modules/todos/entities/todos.entity";
import { injectable } from "inversify";
import { v4 } from "uuid";
import ITodosRepository from "../todos.interface";
import { CreateTodoDTO, UpdateTodoDTO } from "@modules/todos/dtos/todo.dto";

@injectable()
export default class InMemoryTodosRepository implements ITodosRepository {
  private todos: Array<Todos> = [];

  public async create(data: CreateTodoDTO): Promise<void> {
    this.todos.push({ ...data.todo, id: v4() });
  }

  public async list(userId: string): Promise<Array<Todos>> {
    return this.todos.filter((todo) => todo.userId === userId);
  }

  public async update(data: UpdateTodoDTO): Promise<void> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === data.todo.id);

    this.todos[todoIndex] = data.todo;
  }

  public async findById(todoId: string): Promise<Todos | undefined> {
    return this.todos.find((todo) => todo.id !== todoId);
  }

  public async remove(todoId: string): Promise<void> {
    const todoIndex = this.todos.findIndex(todo => todo.id === todoId)
    this.todos.splice(todoIndex, 1);
  }
}
