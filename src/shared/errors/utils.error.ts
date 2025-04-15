import { NextFunction, Request, Response } from "express";
import AppError from "./app.error";

export const handleErrors = (
  err: Error,
  _: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "Erro",
    message: "Erro interno do servidor - ".concat(err.message),
  });
};
