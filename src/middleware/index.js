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

module.exports = { checksExistsUserAccount };
