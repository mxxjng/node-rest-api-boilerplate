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

!!! (when prisma studio is not updated correctly by the schema delete the docker image completely and/or change the database to connect to)

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

1. Run all tests

```shell
$ npm run test
```

## Building

1. compile typescript to javascript (some ts errors might occur but the project gets still build)

```shell
$ npm run build
```

## Deployment

coming soon...
