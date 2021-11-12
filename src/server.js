const { app } = require(".");
const PORT = 3333;

app.listen(PORT, () => console.log(
  `👀 Server http://localhost:${PORT}/swagger is being watched - 'Quis custodiet ipsos custodes? 🤔'!`
));
