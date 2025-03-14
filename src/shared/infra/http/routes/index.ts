import { Router } from "express";
import usersRouter from "@modules/users/infra/http/routes/users.routes";
import todosRouter from "@modules/todos/infra/http/routes/todos.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/todos", todosRouter);

export default routes;
