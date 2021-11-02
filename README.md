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

Durante o desenvolvimento, foi utilizando o NodeJS v16.13.0, ORM `TypeORM` e Postgres, foi criado
autenticação com JWT.

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

```bash

```

## 👍🏻 Como baixar

```bash
     // Clonar repositório
    $ git clone https://github.com/luancampos/backendCamposCar

    // Acessar diretório
    $ cd backendCamposCar

    // Instalar dependências
    $ yarn

    // Subir o Postgres
    $ sudo docker-compose.yaml up -d

    //Copiar as Crendeciais
    $ cp ormconfig.example.json ormconfig.json

    // Rodar as migrations
    $ yarn typeorm migration:run

    // Rodar os Seeds
    $yarn seed:run

    // Iniciar projeto
    $ yarn dev
```

## ☑️ Funcionalidades

- [x] CRUD de Users <br/>
- [x] Autenticacao de Users<br/>
- [x] CRUD de Carros<br/>
- [x] Upload de imagens<br />

---

<h2 align="center">Desenvolvido por  Luan Campos </h2>
