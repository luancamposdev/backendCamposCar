<p align="center">🎉
  <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-conceitos-ensinados">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-material-de-apoio">Material de apoio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-baixar">Como baixar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-instalar">Como instalar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#️-funcionalidades">Funcionalidades</a>
</p>

# 🔖 Sobre

Esse projeto foi desenvolvido para a prova de teste.

## ✍🏻 Tecnologias

Durante o desenvolvimento, foi utilizando o ORM `TypeORM` e Postgres, foi criado relacionamento `Many to Many`, foram criados `Roles e Permissions` e vinculei ao user e criei um `middleware` de validação das rotas, de acordo com as permissões.

## 🗂 Material de apoio

- [NodeJs](https://nodejs.org/en/)
- [TypeORM](https://typeorm.io)
- [Postgres](https://www.postgresql.org/)
- [JWT](https://jwt.io)
- [JsonWebToken](https://npmjs.com/package/jsonwebtoken)
- [BCrypt](https://npmjs.com/package/bcrypt)

## 💥 Como instalar

- [Instalando o Docker](https://docs.docker.com/get-docker/)
- [Instalando o Docker Compose](https://docs.docker.com/compose/install/)

- **rode o comando abaixo para iniciar o postgres e pgadmin com o compose**

```shell
  sudo docker-compose.yaml up -d
```

- **Rode o comando abaixo e altere as suas credenciais no** ormconfig.json

```shell
  cp ormconfig.example.json ormconfig.json
```

**Após criar o arquivo rode o comando no terminal** ( sudo docker-compose up -d )

## 👍🏻 Como baixar

```bash

    // Clonar repositório
    $ git clone https://github.com/luancampos/backendCamposCar

    // Acessar diretório
    $ cd backendCamposCar

    // Instalar dependências
    $ yarn

    // Rodar as migrations
    $ yarn typeorm migration:run

    // Iniciar projeto
    $ yarn dev
```

## ☑️ Funcionalidades

- [x] CRUD de Users <br/>
- [x] Autenticacao de Users<br/>
- [x] Cadastro de Permissões<br/>
- [x] Cadastro de Roles<br/>
- [x] Relacionamento User_Roles<br/>
- [x] Relacionamento Permission_Roles<br/>
- [x] CRUD de Carros<br/>
- [x] Upload de imagens<br />

---

<h2 align="center">Desenvolvido por  Luan Campos </h2>
