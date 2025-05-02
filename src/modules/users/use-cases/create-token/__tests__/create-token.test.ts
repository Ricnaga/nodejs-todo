import User from '@modules/users/entities/user.entity';
import { mockTokenRepository } from '@modules/users/repositories/__mocks__/token-repository.mocks';
import { mockUsersRepository } from '@modules/users/repositories/__mocks__/users-repository.mocks';

import { mockHashProvider } from '@shared/container/providers/HashProvider/__mocks__/hash-provider.mocks';
import AppError from '@shared/errors/app.error';

import CreateTokenUseCase from '../create-token.use-case';
import { mockCreateToken } from './create-token.mock';

const user: User = {
  id: 'mock_user-id',
  username: 'mock_user_username',
  password: 'mock_hashed-password',
  email: 'mock_user_email@example.com',
};

describe('USE-CASE -> Create Token', () => {
  let createTokenUseCase: CreateTokenUseCase;

  beforeAll(() => {
    createTokenUseCase = new CreateTokenUseCase(
      mockUsersRepository,
      mockTokenRepository,
      mockHashProvider,
    );
  });

  it('should create a new token', async () => {
    mockUsersRepository.findByUsername.mockResolvedValue(user);
    mockHashProvider.compareHash.mockResolvedValue(true);
    mockTokenRepository.create.mockResolvedValue('generated-token');

    const result = await createTokenUseCase.execute(mockCreateToken);

    expect(mockUsersRepository.findByUsername).toHaveBeenCalledWith(
      mockCreateToken.username,
    );

    expect(mockHashProvider.compareHash).toHaveBeenCalledWith(
      mockCreateToken.password,
      user.password,
    );

    expect(result).toEqual({ token: 'generated-token' });
  });

  it('should throw an error if user is not found', async () => {
    mockUsersRepository.findByUsername.mockResolvedValue(undefined);

    await expect(
      createTokenUseCase.execute(mockCreateToken),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should throw an error if password is incorrect', async () => {
    mockUsersRepository.findByUsername.mockResolvedValue(user);
    mockHashProvider.compareHash.mockResolvedValue(false);

    await expect(
      createTokenUseCase.execute(mockCreateToken),
    ).rejects.toBeInstanceOf(AppError);
  });
});
