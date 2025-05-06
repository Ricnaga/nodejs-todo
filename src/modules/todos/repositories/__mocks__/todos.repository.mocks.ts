import ITodosRepository from '../todos.interface';

export const todosRepositoryFactory = (): jest.Mocked<ITodosRepository> => ({
  create: jest.fn(),
  list: jest.fn(),
  remove: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
});

export const mockTodosRepository: jest.Mocked<ITodosRepository> =
  todosRepositoryFactory();
