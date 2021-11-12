const { users } = require("../usersRepository");

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
  const { username } = request.headers;

  const hasUserAccount = users.find((user) => user.username === username);

  if (hasUserAccount === undefined) {
    return response.status(500).json({ error: "We can't find this username" });
  }

  if (hasUserAccount.length) {
    return response.status(400).json({ error: "This user does not exists!" });
  }

  request.userFound = hasUserAccount;

  return next();
}

function checksCreateTodosUserAvailability(request, response, next) {
  // Complete aqui
  const { user } = request;

  if (user.pro === false && user.todos.length === 10) {
    return response.status(403).json({ error: "You already have ten todos" });
  }

  return next();
}

function checksTodoExists(request, response, next) {
  // Complete aqui
  const { username } = request.headers;
  const { id } = request.params;

  const validateUser = users.find((user) => user.username === username);

  if (!validateUser) {
    return response.status(404).json({ error: "This user does not exists" });
  }

  if (!validate(id)) {
    return response.status(400).json({ error: "The Id is not a uuid" });
  }

  const validateTodo = validateUser.todos.find((todo) => todo.id === id);

  if (!validateTodo) {
    return response.status(404).json({ error: "This todo does not exists" });
  }

  request.todo = validateTodo;
  request.user = validateUser;
  return next();
}

function findUserById(request, response, next) {
  // Complete aqui
  const { id } = request.params;
  const hasUser = users.find((user) => user.id === id);

  if (!hasUser) {
    return response.status(404).json({ error: "this user does not exists!" });
  }

  request.user = hasUser;
  return next();
}

module.exports = {
  checksExistsUserAccount,
  checksCreateTodosUserAvailability,
  checksTodoExists,
  findUserById,
};
