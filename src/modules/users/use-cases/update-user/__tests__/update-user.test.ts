import { mockUser } from '@modules/users/entities/user.mock';
import { mockUsersRepository } from '@modules/users/repositories/__mocks__/users-repository.mocks';

import AppError from '@shared/errors/app.error';

import UpdateUserUseCase from '../update-user.use-case';
import { mockUpdatedUser } from './update-user.mock';

describe('USE-CASE -> Update User', () => {
  let updateUserUseCase: UpdateUserUseCase;

  beforeAll(() => {
    updateUserUseCase = new UpdateUserUseCase(mockUsersRepository);
  });

  it('should update an user', async () => {
    mockUsersRepository.findById.mockResolvedValue(mockUser);
    mockUsersRepository.update.mockResolvedValue(mockUser);

    const result = await updateUserUseCase.execute(mockUpdatedUser);
    expect(result).toEqual(mockUser);
  });

  it('should throw an error if user is not found', async () => {
    mockUsersRepository.findById.mockResolvedValue(undefined);
    await expect(
      updateUserUseCase.execute(mockUpdatedUser),
    ).rejects.toBeInstanceOf(AppError);
  });
});
