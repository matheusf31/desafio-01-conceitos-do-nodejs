const express = require("express");

const app = express();

app.listen(3333);

const projects = [];
var count = 0;

// MIDDLEWARES

// global
app.use(express.json());

app.use((req, res, next) => {
  count = count + 1;

  console.log(`Foram feitas ${count} requisições`);

  return next();
});

// local
function checkId(req, res, next) {
  const { id } = req.params;

  const verifica = projects.find(e => e.id === id);

  if (!verifica) {
    return res
      .status(400)
      .json({ error: "Nenhum projeto com este ID encontrado" });
  }

  return next();
}

// ROTAS

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
app.post("/projects/:id/tasks", checkId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(e => e.id === id);

  projects[projectIndex].tasks.push(title);

  return res.json(projects);
});

// atualizar um projeto
app.put("/projects/:id", checkId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(e => e.id === id);

  /**  
    OBS.: isso altera o projects porque project recebeu uma REFERÊNCIA ao objeto projects 
    (arrays, objetos e funções são passados como referêcia no javascript)
  **/
  project.title = title;

  return res.json(project);
});

// deletar um projeto
app.delete("/projects/:id", checkId, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(e => e.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});
