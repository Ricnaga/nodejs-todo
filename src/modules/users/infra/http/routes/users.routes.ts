import { Router } from "express";
import SignUpController from "../controllers/sign-up/sign-up.controller";
import { validateData } from "@shared/infra/http/middlewares/validate-data.middleware";
import { signUpBodySchema } from "../controllers/sign-up/sign-up.schema";
// import LoginController from "../controllers/login/login.controller";
// import UpdateController from "../controllers/update/update.controller";

const usersRouter = Router();

const signUpController = new SignUpController();

usersRouter.post(
  "/sign-up",
  validateData(signUpBodySchema),
  signUpController.create
);

// const loginController = new LoginController();
// usersRouter.post("/login", loginController.create);

// const updateController = new UpdateController();
// usersRouter.put("/:id", updateController.update);

export default usersRouter;
