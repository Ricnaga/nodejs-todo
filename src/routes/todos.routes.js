const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { checksExistsUserAccount, checksTodoExists } = require("../middleware");

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


todosRoutes.put('/:id', checksTodoExists, (request, response) => {
  const { title, deadline } = request.body;
  const { todo } = request;

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.json(todo);
});


todosRoutes.delete('/:id', checksExistsUserAccount, checksTodoExists, (request, response) => {
  const { user, todo } = request;

  const todoIndex = user.todos.indexOf(todo);

  if (todoIndex === -1) {
    return response.status(404).json({ error: 'Todo not found' });
  }

  user.todos.splice(todoIndex, 1);

  return response.status(204).send();
});

todosRoutes.patch("/:id/done", checksTodoExists, (request, response) => {
  const { todo } = request;

  todo.done = true;

  return response.json(todo);
});

module.exports = { todosRoutes };