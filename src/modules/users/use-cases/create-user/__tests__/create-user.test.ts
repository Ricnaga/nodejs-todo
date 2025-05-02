import { mockUsersRepository } from '@modules/users/repositories/__mocks__/users-repository.mocks';

import { mockHashProvider } from '@shared/container/providers/HashProvider/__mocks__/hash-provider.mocks';
import AppError from '@shared/errors/app.error';

import CreateUserUseCase from '../create-user.use-case';
import { mockCreateUser } from './create-user.mocks';

describe('USE-CASE -> Create User', () => {
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
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
