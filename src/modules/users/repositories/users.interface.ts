import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";
import User from "../entities/user.entity";

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: CreateUserDTO): Promise<Array<User>>;
  update(data: UpdateUserDTO): Promise<Array<User>>
}
