const express = require("express");

const app = express();

// para o express entender o json
app.use(express.json());

const projects = [];

// listar todos os projetos
app.get("/projects", (req, res) => {
  return res.json(projects);
});

// criar novo projeto com o body
app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });

  return res.json(projects);
});

// criar tarefas
app.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(e => e.id === id);

  projects[projectIndex].tasks.push(title);

  return res.json(projects);
});

// atualizar um projeto
app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(e => e.id === id);

  project.title = title;

  return res.json(project);
});

// deletar um projeto
app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(e => e.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});

app.listen(3333);
