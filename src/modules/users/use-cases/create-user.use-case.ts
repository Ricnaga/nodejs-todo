import { injectable } from "inversify";

interface IRequest {
  email: string;
  username: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor() {}

  public async execute(data: IRequest): Promise<void> {}
}

export default CreateUserUseCase;
