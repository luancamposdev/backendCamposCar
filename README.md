<p align="center">🎉
  <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-conceitos-ensinados">Conceitos ensinados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-material-de-apoio">Material de apoio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-baixar">Como baixar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#️-funcionalidades">Funcionalidades</a>
</p>

# 🔖 Sobre

Esse projeto foi desenvolvido para a prova de teste.

## ✍🏻 Conceitos ensinados

Durante o desenvolvimento, foi utilizando o ORM `TypeORM` e Postgres, foi criado relacionamento `Many to Many`, foram criados `Roles e Permissions` e vinculei ao user e criei um `middleware` de validação das rotas, de acordo com as permissões.

## 🗂 Material de apoio

- [TypeORM](https://typeorm.io)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [JWT](https://jwt.io)
- [JsonWebToken](https://npmjs.com/package/jsonwebtoken)
- [BCrypt](https://npmjs.com/package/bcrypt)

## Como instalar o Postgres no docker compose

- **crie o arquivo** docker-compose.yaml **No su diretório de preferencia e cole o código abaixo**

```yaml
  version: '3.5'

services:
  postgres:
    container_name: postgres_container
    image: postgres
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "pgadmin"
      PGDATA: /data/postgres
    volumes:
       - postgres:/data/postgres
    ports:
      - "15432:5432"
    networks:
      - postgres
    restart: unless-stopped

  pgadmin:
    container_name: pgadmin_container
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: "postgres@email.com"
      PGADMIN_DEFAULT_PASSWORD: "pgadmin"
    volumes:
       - pgadmin:/var/lib/pgadmin

    ports:
      - "16543:80"
    networks:
      - postgres
    restart: unless-stopped

networks:
  postgres:
    driver: bridge

volumes:
    postgres:
    pgadmin:
```

- **crie na raiz do projeto o arquivo** ormconfig.json **E cole o código abaixo alterando os campos username, password e database de acordo com seu postgres**

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 15432,
  "username": "postgres",
  "password": "yourpassword",
  "database": "yourdatabase",
  "synchronize": false,
  "logging": false,
  "entities": ["./src/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "entitiesDir": "./src/models",
    "migrationsDir": "./src/database/migrations"
  }
}
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
