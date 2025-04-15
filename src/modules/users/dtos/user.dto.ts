import User from "@modules/users/entities/user.entity";

export interface CreateUserDTO {
  user: Omit<User, 'id'>;
}

export interface UpdateUserDTO {
  user: User;
}
