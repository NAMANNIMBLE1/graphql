import { graphql } from "graphql"
import { ApolloServer } from "@apollo/server"
import { schema } from './schema/schema.ts'
import { resolvers } from './resolvers/resolver.ts'
import { startStandaloneServer } from "@apollo/server/standalone"

export const graphql_server = () => {
    return new ApolloServer({
        typeDefs: schema,
        resolvers
    });
};


