import { CreateUserUseCaseRequest } from '../create-user.schema';

export const mockCreateUser: CreateUserUseCaseRequest = {
  username: 'mock_username',
  email: 'mock_email@example.com',
  password: 'mock_password',
};
