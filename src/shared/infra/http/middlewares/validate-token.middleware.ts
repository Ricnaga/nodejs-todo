import { TOKEN_SECRET } from "@config/constants";
import AppError from "@shared/errors/app.error";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import z from "zod";

const validateTokenSchema = z.object({
  authorization: z.string().nullish(),
});

export default function validateToken(
  request: Request,
  _: Response,
  next: NextFunction
): void {
  const { authorization } = validateTokenSchema.parse(request.headers);

  if (!authorization) throw new AppError("Você não possui um token válido", 401);

  const [, token] = authorization.split(" ");

  try {
    const decoded = verify(token, TOKEN_SECRET);

    const { sub } = decoded as JwtPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError("Token inválido", 401);
  }
}
