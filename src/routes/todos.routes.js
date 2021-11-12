const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { checksExistsUserAccount } = require("../middleware");
const { users } = require("../usersRepository");

const todosRoutes = Router();

todosRoutes.post("/", checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { title, deadline } = request.body;

  const { userFound } = request;

  const createTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  userFound.todos.push(createTodo);

  return response.status(201).json(createTodo);
});

todosRoutes.get("/", checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { userFound } = request;

  return response.json(userFound.todos);
});


todosRoutes.put("/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { title, deadline } = request.body;
  const { id } = request.params;
  const { userFound } = request;

  const todoIndex = userFound.todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(404).json({ error: "This todo does not exists!" });
  }

  userFound.todos[todoIndex].title = title;
  userFound.todos[todoIndex].deadline = new Date(deadline);

  return response.json(userFound.todos[todoIndex]);
});


todosRoutes.delete("/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { id } = request.params;
  const { userFound } = request;

  const todoIndex = userFound.todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(404).json({ error: "This todo does not exists!" });
  }

  userFound.todos.splice(id, 1);

  return response
    .status(204)
    .json({ message: `Delete todo ${id} successfully` });
});

todosRoutes.patch("/:id/done", checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { id } = request.params;
  const { userFound } = request;

  const todoIndex = userFound.todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(404).json({ error: "This todo does not exists!" });
  }

  userFound.todos[todoIndex].done = true;

  return response.json(userFound.todos[todoIndex]);
});

module.exports = { todosRoutes };