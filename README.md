## Libs or tools used

- PostgresSQL v15 as vercel supports PostgresSQL v15
- docker compose to run the postgres DB in container for local development
- Kinde for authentication

## Getting Started

Run the postgreSQL docker container using docker-compose
```
docker compose up
```
Once the container is up and running, push the prisma schema
```
npx prisma push db 
```
NOTE: whenever there is a schema change in `schema.prima` file, we should push the schema using `npx prisma push db`

Once the schema chanegs are pushed, it should create a tables in the database
and the same can be verified running the `prisma studio` as
```
npx prisma studio
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and add tasks

Create a prisma migration so that we can use the migration to apply the latest schema when deploying to prod.
```
npx prisma migrate dev --name first
```

## Features used 

- server actions
- app router
- middleware

## Deployment: Vercel 

Add the script `vercel-build` to package.json as,
```json
"vercel-build": "prisma generate && prisma migrate deploy && next build"
```

Deployed on Vercel with postgreSQL DB