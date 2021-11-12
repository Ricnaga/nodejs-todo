const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
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

module.exports = { usersRoutes };
