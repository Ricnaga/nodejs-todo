import { Router } from "express";

const todosRoutes = Router();

todosRoutes.get("/");
todosRoutes.post("/");
todosRoutes.patch("/:id");
todosRoutes.delete("/:id");

export default todosRoutes;
