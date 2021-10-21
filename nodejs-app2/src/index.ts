import { ApolloServer, gql } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation';
import { readFileSync } from 'fs';
import 'reflect-metadata';

const port = process.env.APOLLO_PORT || 4000;

const things = [
    { id: '1', name: 'Red Balls', price: 10 }
]

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }));
const resolvers = {
    Query: {
        allThings: (_: any, args: any, context: any) => {
            return things;
        }
    }
}
const server = new ApolloServer({ schema: buildFederatedSchema({ typeDefs, resolvers }) });
server.listen( {port: port} ).then(({ url }) => {
  console.log(`🚀 Balls server ready at ${url}`);
}).catch(err => {console.error(err)});
