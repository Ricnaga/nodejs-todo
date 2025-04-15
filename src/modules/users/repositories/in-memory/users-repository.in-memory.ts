import {
  CreateUserDTO,
  UpdateUserDTO,
} from "@modules/users/dtos/users/user.dto";
import User from "@modules/users/entities/user.entity";
import { injectable } from "inversify";
import IUsersRepository from "../users.interface";
import { v4 as uuid } from "uuid";

@injectable()
export default class InMemoryUsersRepository implements IUsersRepository {
  private users: Array<User> = [];

  public async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  public async create(data: CreateUserDTO): Promise<Array<User>> {
    const { user } = data;

    this.users.push({ ...user, id: uuid() });

    return this.users;
  }

  public async update(data: UpdateUserDTO): Promise<Array<User>> {
    const userIndex = this.users.findIndex((user) => user.id === data.user.id);

    this.users[userIndex] = data.user;

    return this.users;
  }
}
