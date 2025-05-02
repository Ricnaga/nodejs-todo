import { UpdateUserUseCaseRequest } from '../update-user.schema';

export const mockUpdatedUser: UpdateUserUseCaseRequest = {
  user: {
    email: 'mock_email_updated',
    id: 'mock_id_updated',
    password: 'mock_password_updated',
    username: 'mock_username_updated',
  },
};
