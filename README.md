# Desafio 01

### Sobre:

- Aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

- [Desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md#desafio-01-conceitos-do-nodejs)

---

### Ferramentas utilizadas:

- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Insomnia](https://insomnia.rest/)

---

### Como rodar:

- Primeiro clone o repositório ou faça download;
- Abra a pasta do projeto e rode no terminal:

  `$ yarn`

  `$ yarn dev`

- No insomnia, crie uma requisição (get, post, put, delete) e basta copiar as seguintes rotas:

  Método GET (listar projetos): http://localhost:3333/projects

  Método DELETE (deletar projeto): http://localhost:3333/projects/1

  Método POST (criar projetos): http://localhost:3333/projects,
      		Colocar no body: 
          {
      				"id": "2",
      				"title": "Novo projeto"
      		}

  Método POST (criar tarefas): http://localhost:3333/projects/1/tasks,
      		Colocar no body: 
          {
      				"title": "Novo tarefa"
      		}

  Método PUT (atualizar projeto): http://localhost:3333/projects/1,
      		Colocar no body: 
          {
      				"title": "altera titulo"
      		}
