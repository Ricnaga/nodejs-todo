import IUsersRepository from '@modules/users/repositories/users.interface';

import IHashProvider from '@shared/container/providers/HashProvider/models/hash-provider.interface';
import AppError from '@shared/errors/app.error';

import CreateUserUseCase from '../create-user.use-case';
import {
  hashProviderFactory,
  mockCreateUser,
  usersRepositoryFactory,
} from './create-user.mocks';

describe('USE-CASE -> Create User', () => {
  let createUserUseCase: CreateUserUseCase;
  let mockUsersRepository: jest.Mocked<IUsersRepository>;
  let mockHashProvider: jest.Mocked<IHashProvider>;

  beforeAll(() => {
    mockUsersRepository = usersRepositoryFactory(); // cria o mock uma vez antes de todos os testes
    mockHashProvider = hashProviderFactory(); // cria o mock uma vez antes de todos os testes
    createUserUseCase = new CreateUserUseCase(
      mockUsersRepository,
      mockHashProvider,
    );
  });

  it('should create a new user', async () => {
    await createUserUseCase.execute(mockCreateUser);

    expect(mockUsersRepository.create).toHaveBeenCalledWith({
      user: { ...mockCreateUser, password: 'hashed-password' },
    });
  });

  it('should throw an error if the email is already in use', async () => {
    mockUsersRepository.findByEmail.mockResolvedValue({
      ...mockCreateUser,
      id: 'user_id',
    });

    await expect(
      createUserUseCase.execute(mockCreateUser),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should throw an error if the username is already in use', async () => {
    mockUsersRepository.findByUsername.mockResolvedValue({
      ...mockCreateUser,
      id: 'user_id',
    });

    await expect(
      createUserUseCase.execute(mockCreateUser),
    ).rejects.toBeInstanceOf(AppError);
  });
});
