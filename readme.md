# Node Rest API Boilerplate

Contains:

- Postgresql (Database)
- Node.js (Server)
- Typescript (Typechecking)
- Prisma.js (Database ORM)
- Jest (Testing)

## Installation

1. Install Docker

2. Copy env.example to .env

3. Change docker compose and .env to your needs

4. Install node_modules

```shell
$ npm i
```

5. Run Local Database

```shell
$ docker-compose up
```

6. Migrate Database

```shell
$ npm run prisma:migrate
```

## Workflow

1. Run Local Database

```shell
$ docker-compose up
```

2. Start the dev Server

```shell
$ npm run dev
```

## Testing

coming sooon...

## Deployment

coming soon...
