import CreateTodoDTO from "@modules/users/dtos/users/create-user.dto";
import UpdateUserDTO from "@modules/users/dtos/users/update-user.dto";
import User from "@modules/users/entities/user.entity";
import { injectable } from "inversify";
import IUsersRepository from "../users.interface";

@injectable()
export default class InMemoryUsersRepository implements IUsersRepository {
  private users: Array<User> = [];

  public async create(data: CreateTodoDTO): Promise<void> {
    console.log("CREATE");
  }
  public async update(data: UpdateUserDTO): Promise<void> {
    console.log("UPDATE");
  }
}
