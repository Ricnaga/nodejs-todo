import { CreateUserDTO, UpdateUserDTO } from "../dtos/users/user.dto";
import User from "../entities/user.entity";

export default interface IUsersRepository {
  findByUsername(username: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: CreateUserDTO): Promise<Array<User>>;
  update(data: UpdateUserDTO): Promise<Array<User>>
}
