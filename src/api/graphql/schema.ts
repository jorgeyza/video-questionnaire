import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from '.';

export const schema = makeSchema({
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'src', 'api' , 'graphql', 'context.ts')
  },
  nonNullDefaults: {
    input: true,
    output: true
  },
  outputs: {
    schema: join(process.cwd(), 'src', 'api' , 'graphql', 'schema.graphql'),
    typegen: join(process.cwd(), 'src', 'api' , 'graphql', 'nexus.ts')
  },
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  sourceTypes: {
    debug: process.env.NODE_ENV === 'development',
    modules: [{ alias: 'prisma', module: '.prisma/client' }]
  },
  types: types
});
