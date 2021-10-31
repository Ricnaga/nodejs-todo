 <img src="https://img.shields.io/github/license/Ricnaga/nodejs-todo?label=License&style=for-the-badge"/>

# <div align="center"> Desafio NodeJS 1 - todo </div>

#### <div align="right">- Projeto Finalizado <div>

### <div align="center"> Desafio de curso criado pela equipe Rocketseat abordando conceitos sobre: </div>

#### 1. Nodejs
#### 2. Javascript
#### 3. CRUD com ExpressJS 
#### 4. Tipos de dados de requisições
#### 5. Tipos de dados de retornos


## <div align="center"> Sumário </div>
<!--ts-->
   - [Requisitos](#<div-align="center">Requisitos</div>)
   - [Tecnologias utilizadas](#<div-align="center">Tecnologias-utilizadas</div>)
<!--te-->

## <div align="center">Requisitos</div>
Para executar a aplicação é necessário instalar algumas ferramentas tais como um editor de códigos para realizar compilação dos mesmos. Nesse projeto foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/) para compilação do código, [Git Bash](https://gitforwindows.org/) para baixar o repositório e baixar todas as dependências necessárias. Para realizar testes foi utilizado o [Insomnia](https://insomnia.rest/download/)

```bash
# Baixe o repositório.
$ git clone https://github.com/Ricnaga/nodejs-todo.git

# Acesse a pasta do projeto.
$ cd nodejs-todo

# Agora que baixou e acessou o repositório, vamos começar a instalação das dependências.
$ yarn ( caso não utilize o yarn execute apenas npm -i)

# Depois de instalado todas as dependências, abra a aplicação via vscode
$ code .

# Agore execute a aplicação.
$ yarn dev (caso não utilize o yarn: npm run dev)

# A aplicação iniciará na porta 3333 
# utilize o insomnia para executar as rotas, no insomnia as rotas são:

#POST:
-http://localhost:3333/users
no body:{"name":"nome", "username":"usuario"}

-http://localhost:3333/todos
no body:{"title":"titulo inserido", "deadline": "dd-mm-aaaa"}

#GET
-http://localhost:3333/todos

#PUT
-http://localhost:3333/todos/{id}
no body:{"title":"titulo inserido", "deadline": "dd-mm-aaaa"}
no lugar de {id} parâmetro da url:{"id":"id-do-usuario"}

#DELETE
-http://localhost:3333/todos/{id}
no lugar de {id} parâmetro da url:{"id":"id-do-usuario"}

#PATCH
-http://localhost:3333/todos/{id}/done
no lugar de {id} parâmetro da url:{"id":"id-do-usuario"}

```

##  <div align="center">Tecnologias utilizadas</div>
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/starter/installing.html)


## <div align="center">Autor</div>
<div align="center">Atividade desenvolvida no curso ignite pela equipe <a href="https://rocketseat.com.br/">Rocketseat</a>, realizados por minha pessoa.
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona.<br>
<a href="https://www.linkedin.com/in/ricardo-nagatomy"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>
</div>
