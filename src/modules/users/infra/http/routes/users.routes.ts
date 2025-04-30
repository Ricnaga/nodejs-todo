import { Router } from 'express';

import validateToken from '@shared/infra/http/middlewares/validate-token.middleware';

import LoginController from '../controllers/login/login.controller';
import MeController from '../controllers/me/me.controller';
import SignUpController from '../controllers/sign-up/sign-up.controller';
import UpdateController from '../controllers/update/update.controller';

const usersRouter = Router();

const signUpController = new SignUpController();

usersRouter.post('/', signUpController.create);

const loginController = new LoginController();
usersRouter.post('/login', loginController.create);

const updateController = new UpdateController();
usersRouter.put('/:id', validateToken, updateController.update);

const meController = new MeController();
usersRouter.get('/me', validateToken, meController.list);

export default usersRouter;
