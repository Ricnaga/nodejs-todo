import ITokenRepository from '../token.interface';

export const tokenRepositoryFactory = (): jest.Mocked<ITokenRepository> => ({
  create: jest.fn(),
  findByToken: jest.fn(),
});

export const mockTokenRepository: jest.Mocked<ITokenRepository> =
  tokenRepositoryFactory();
