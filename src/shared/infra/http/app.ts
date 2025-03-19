import "reflect-metadata";
import AppError from "@shared/errors/app.error";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { initDocsServer } from "./docs/swagger";
import routes from "./routes";
import "express-async-errors";

const handleErrors = (
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

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleErrors);

initDocsServer(app);

export { app };
