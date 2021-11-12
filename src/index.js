const express = require("express");
const cors = require("cors");
const {serve, setup} = require('swagger-ui-express')
const swaggerFile = require("./swagger.json");

const { usersRoutes } = require("./routes/users.routes");
const { todosRoutes } = require("./routes/todos.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/swagger", serve, setup(swaggerFile));

app.use("/users", usersRoutes);
app.use("/todos", todosRoutes);

module.exports = { app };
