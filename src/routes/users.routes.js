const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { findUserById } = require("../../../2-todo-middleware/src");
const { users } = require("../usersRepository");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  // Complete aqui
  const { name, username } = request.body;
  const foundUsername = users.some((user) => user.username === username);

  if (foundUsername) {
    return response.status(400).json({ error: "Username already exists" });
  }

  const createUserTodo = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };
  users.push(createUserTodo);

  return response.status(201).json(createUserTodo);
});

usersRoutes.get('/:id', findUserById, (request, response) => {
  const { user } = request;

  return response.json(user);
});

usersRoutes.patch('/:id/pro', findUserById, (request, response) => {
  const { user } = request;

  if (user.pro) {
    return response.status(400).json({ error: 'Pro plan is already activated.' });
  }

  user.pro = true;

  return response.json(user);
});
module.exports = { usersRoutes };
