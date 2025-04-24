import validateToken from "@shared/infra/http/middlewares/validate-token.middleware";
import { Router } from "express";
import LoginController from "../controllers/login/login.controller";
import SignUpController from "../controllers/sign-up/sign-up.controller";
import UpdateController from "../controllers/update/update.controller";

const usersRouter = Router();

const signUpController = new SignUpController();

usersRouter.post("/sign-up", signUpController.create);

const loginController = new LoginController();
usersRouter.post("/login", loginController.create);

const updateController = new UpdateController();
usersRouter.put("/:id", validateToken, updateController.update);

export default usersRouter;
