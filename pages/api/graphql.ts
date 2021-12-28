import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import { schema } from '../../src/api/graphql/schema';
import { context } from '../../src/api/graphql/context';

const cors = Cors();

const server = new ApolloServer({ context, schema });

const startServer = server.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  return server.createHandler({
    path: '/api/graphql'
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false
  }
};
