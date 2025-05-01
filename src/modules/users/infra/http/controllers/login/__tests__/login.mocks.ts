import { signUpBodyRequest } from '../../sign-up/__tests__/sign-up.mocks';
import { LoginBodyRequest } from '../login.schema';

export const loginBodyRequest: LoginBodyRequest = {
  username: signUpBodyRequest.username,
  password: signUpBodyRequest.password,
};
