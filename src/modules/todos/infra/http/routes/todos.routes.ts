import { Router } from "express";
import CreateTodoController from "../controllers/create/create-todos.controller";
import validateToken from "@shared/infra/http/middlewares/validate-token.middleware";
import ListTodoController from "../controllers/list/list-todos.controller";

const todosRoutes = Router();

const createTodoController = new CreateTodoController();
todosRoutes.post("/", validateToken, createTodoController.create);

const listTodoController = new ListTodoController()
todosRoutes.get("/", validateToken, listTodoController.list);


todosRoutes.patch("/:id");
todosRoutes.delete("/:id");

export default todosRoutes;
