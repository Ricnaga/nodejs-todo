import { userEntitySchema } from "@modules/users/entities/user.schema";
import CreateUserUseCase from "@modules/users/use-cases/create-user/create-user.use-case";
import container from "@shared/container/di/base.di";
import { NextFunction, Request, Response } from "express";

const signUpBodySchema = userEntitySchema.pick({
  email: true,
  username: true,
  password: true,
});

export default class SignUpController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const body = signUpBodySchema.parse(request.body);

    try {
      const createUserUseCase = await container.getAsync<CreateUserUseCase>(
        CreateUserUseCase
      );

      await createUserUseCase.execute(body);
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
