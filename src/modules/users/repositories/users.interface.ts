import CreateUserDTO from "../dtos/users/create-user.dto";
import UpdateUserDTO from "../dtos/users/update-user.dto";

export default interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  update(data: UpdateUserDTO): Promise<void>;
}
