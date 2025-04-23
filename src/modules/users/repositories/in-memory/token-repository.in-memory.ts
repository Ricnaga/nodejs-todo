import tokenConfig from "@config/token";
import { sign } from "jsonwebtoken";
import ITokenRepository from "../token.interface";

export default class InMemoryTokenRepository implements ITokenRepository {
  public async create(userId: string): Promise<string> {
    const token = sign({}, tokenConfig.secret_token, {
      subject: userId,
      expiresIn: tokenConfig.expires_in_token,
    });

    return token;
  }
  findByToken(token: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
}
