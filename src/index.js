const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
  const { username } = request.headers

  const hasUserAccount = users.find(user => user.username === username)

  if (hasUserAccount.length === 0) {
    return response.status(400).json({ error: "This user does not exists!" })
  }

  request.userFound = hasUserAccount

  return next()
}

app.post('/users', (request, response) => {
  // Complete aqui
  const { name, username } = request.body

  const createUserTodo = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  const foundUsername = users.some(user => user.username === username)

  if (foundUsername) {
    return response.status(400).json({ error: "Username already exists" })
  }

  users.push(createUserTodo)

  return response.status(201).json(createUserTodo)

});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { title, deadline } = request.body

  const { userFound } = request

  const createTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  userFound.todos.push(createTodo)

  return response.status(201).json(createTodo)

});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { userFound } = request

  return response.json(userFound.todos)
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { title, deadline } = request.body
  const { id } = request.params
  const { userFound } = request

  const todoIndex = userFound.todos.findIndex(todo => todo.id === id)

  if (todoIndex === -1) {
    return response.status(404).json({ error: "This todo does not exists!" })
  }

  userFound.todos[todoIndex].title = title
  userFound.todos[todoIndex].deadline = new Date(deadline)

  return response.json(userFound.todos[todoIndex])

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { id } = request.params
  const { userFound } = request

  const todoIndex = userFound.todos.findIndex(todo => todo.id === id)
  
  if (todoIndex === -1) {
    return response.status(404).json({ error: "This todo does not exists!" })
  }

  userFound.todos.splice(id, 1)

  return response.status(204).json({ message: `Delete todo ${id} successfully` })

});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { id } = request.params
  const { userFound } = request

  const todoIndex = userFound.todos.findIndex(todo => todo.id === id)
  
  if (todoIndex === -1) {
    return response.status(404).json({ error: "This todo does not exists!" })
  }

  userFound.todos[todoIndex].done = true

  return response.json(userFound.todos[todoIndex])
});


module.exports = app;