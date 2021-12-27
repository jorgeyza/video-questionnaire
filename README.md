# Video questionnaire

Install the dependencies with ```npm install``` or ```yarn```.

Add a ```.env``` file following the ```.env.test``` example. 

Run the docker-compose file to set up a postgres database with ```docker-compose up -d``` or create a videoQuestionnaire database in your local machine.

Run the following command to create your Postgres database and tables. It will also be automatically seeded with 4 questions.
`npx prisma migrate dev --name init`.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

A nexus.ts and schema.graphql files will be automatically generated

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.