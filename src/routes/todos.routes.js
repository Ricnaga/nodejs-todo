const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { checksExistsUserAccount, checksTodoExists, checksCreateTodosUserAvailability } = require("../middleware");

const todosRoutes = Router();

todosRoutes.post("/", checksExistsUserAccount, checksCreateTodosUserAvailability, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  const newTodo = {
    id: uuidv4(),
    title,
    deadline: new Date(deadline),
    done: false,
    created_at: new Date()
  };

  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});

todosRoutes.get("/", checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
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