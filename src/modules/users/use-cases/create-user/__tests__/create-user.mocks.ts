import IUsersRepository from '@modules/users/repositories/users.interface';

import IHashProvider from '@shared/container/providers/HashProvider/models/hash-provider.interface';

import { CreateUserUseCaseRequest } from '../create-user.schema';

export const usersRepositoryFactory = (): jest.Mocked<IUsersRepository> => ({
  findByEmail: jest.fn(),
  findByUsername: jest.fn(),
  create: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
});

export const hashProviderFactory = (): jest.Mocked<IHashProvider> => ({
  createHash: jest.fn().mockResolvedValue('hashed-password'),
  compareHash: jest.fn(),
});

export const mockCreateUser: CreateUserUseCaseRequest = {
  username: 'mock_username',
  email: 'mock_email@example.com',
  password: 'mock_password',
};
