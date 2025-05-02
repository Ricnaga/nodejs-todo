import IHashProvider from '../models/hash-provider.interface';

export const hashProviderFactory = (): jest.Mocked<IHashProvider> => ({
  createHash: jest.fn().mockResolvedValue('hashed-password'),
  compareHash: jest.fn(),
});

export const mockHashProvider: jest.Mocked<IHashProvider> =
  hashProviderFactory();
