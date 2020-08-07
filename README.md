<h1 align="center">
    <img alt="proffy-landing" src="web/src/assets/images/landing.svg" width="310px" />
</h1>

<h4 align="center">
  Next Level Week #2
</h4>

<p align="center">
  <a href="#rocket-tecnologias"> :rocket: Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">💻 Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">🔖 Como Executar</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## :rocket: Tecnologias

Este projeto contém as seguintes tecnologias:

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Knex](http://knexjs.org/)
- [Sqlite3](https://www.sqlite.org/index.html)

## 💻 Projeto

O Proffy é uma proposta de projeto que facilita a vida de professores e alunos no aprendizado do dia-a-dia, tornando possível que o aluno encontre professores disponíveis para lecionar uma matéria de seu interesse e entrar em contato com elas via WhatsApp, ou no caso de ser um professor, o mesmo pode se registar e oferecer seus serviços de estudos para novos alunos.

## 🔖 Como Executar

#### Clonando o projeto
```sh

git clone https://github.com/ffzanini/proffy-project.git

```
#### Instalação Web
No seu terminal, siga as instruções abaixo para instalar a dependência no projeto.
```sh

cd web
yarn add react-router-dom
yarn add @types/react-router-dom -D

```
É nescessário passar @types pois no projeto é utilizado linguagem tipada (TypeScript).

#### Instalação Server
No seu terminal, siga as instruções abaixo para instalar a dependência no projeto.
```sh

cd server
yarn add ts-node-dev -D
yarn add express
yarn add @types/express -D
yarn add knex sqlite3
yarn add cors

```
É nescessário passar @types pois no projeto é utilizado linguagem tipada (TypeScript).

#### Gerar banco de dados
```sh

cd server
yarn knex:migrate

```

#### Iniciando a aplicação Web
```sh

cd web
yarn start

```

#### Iniciando a aplicação Server
```sh

cd server
yarn start

```

## License
<p align="justify">
This project is licensed under the <a href="https://github.com/ffzanini/proffy-project/blob/master/LICENSE">MIT<a/> License
</p>
    
## Agradecimentos

* Rocketseat
* Diego Fernandes

---

Feito com 💙 by Felipe Frantz Zanini