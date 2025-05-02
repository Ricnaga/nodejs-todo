import IUsersRepository from '../users.interface';

export const usersRepositoryFactory = (): jest.Mocked<IUsersRepository> => ({
  findByEmail: jest.fn(),
  findByUsername: jest.fn(),
  create: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
});

export const mockUsersRepository: jest.Mocked<IUsersRepository> =
  usersRepositoryFactory();
