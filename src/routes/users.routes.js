const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { findUserById } = require("../middleware");
const { users } = require("../usersRepository");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  const { name, username } = request.body;

  const usernameAlreadyExists = users.some((user) => user.username === username);

  if (usernameAlreadyExists) {
    return response.status(400).json({ error: 'Username already exists' });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    pro: false,
    todos: []
  };

  users.push(user);

  return response.status(201).json(user);
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
