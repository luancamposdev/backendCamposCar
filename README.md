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
    // Clonar repositório
    $ git clone https://github.com/luancampos/backendCamposCar

    // Acessar diretório
    $ cd backendCamposCar
```

- **rode o comando abaixo para iniciar o postgres e pgadmin com o compose**

```shell
  sudo docker-compose.yaml up -d
```

- **Rode o comando abaixo e altere as suas credenciais no** ormconfig.json

```shell
  cp ormconfig.example.json ormconfig.json
```

## 👍🏻 Como baixar

```bash
    // Instalar dependências
    $ yarn

    // Rodar as migrations
    $ yarn typeorm migration:run

    // Iniciar projeto
    $ yarn dev
```

## **Exemplo para criar os usuários**<br />

// User

```json
{
  "name": "Admin",
  "username": "admin",
  "email": "admin@camposcar.com",
  "password": "123456"
}
```

```shell
  cp ormconfig.example.json ormconfig.json
```

## ☑️ Funcionalidades

- [x] CRUD de Users <br/>
- [x] Autenticacao de Users<br/>
- [x] CRUD de Carros<br/>
- [x] Upload de imagens<br />

---

<h2 align="center">Desenvolvido por  Luan Campos </h2>
