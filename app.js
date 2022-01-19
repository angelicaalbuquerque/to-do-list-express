const express = require("express");

const app = express();

//para usar o middleware
app.use(express.json());

//middleware
const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next();
};

app.use(log);

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas 🎯   </h1>");
});

app.get("/json", (req, res) => {
  res.json({ title: "Tarefa", done: true });
});

app.listen(3000, () => {
  console.log("Servidor ativo! 🚀 ");
});
