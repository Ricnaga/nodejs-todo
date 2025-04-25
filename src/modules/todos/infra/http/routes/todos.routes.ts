import { Router } from "express";
import CreateTodoController from "../controllers/create/create-todos.controller";
import validateToken from "@shared/infra/http/middlewares/validate-token.middleware";

const todosRoutes = Router();

const createTodoController = new CreateTodoController();
todosRoutes.post("/", validateToken, createTodoController.create);

todosRoutes.get("/");
todosRoutes.patch("/:id");
todosRoutes.delete("/:id");

export default todosRoutes;
