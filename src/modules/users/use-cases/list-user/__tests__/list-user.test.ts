import { mockUser } from '@modules/users/entities/user.mock';
import { mockUsersRepository } from '@modules/users/repositories/__mocks__/users-repository.mocks';

import AppError from '@shared/errors/app.error';

import ListUserUseCase from '../list-user.use-case';
import { mockListUser } from './list-user.mock';

describe('USE-CASE -> List User', () => {
  let listUserUseCase: ListUserUseCase;

  beforeAll(() => {
    listUserUseCase = new ListUserUseCase(mockUsersRepository);
  });

  it('should list an user', async () => {
    mockUsersRepository.findById.mockResolvedValue(mockUser);

    const result = await listUserUseCase.execute(mockListUser);
    expect(result).toEqual({ id: mockUser.id, username: mockUser.username });
  });

  it('should throw an error when ID is missing', async () => {
    await expect(
      listUserUseCase.execute({ id: undefined }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should throw an error if user is not found', async () => {
    mockUsersRepository.findById.mockResolvedValue(undefined);

    await expect(listUserUseCase.execute(mockListUser)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
