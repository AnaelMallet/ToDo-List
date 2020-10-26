const { ApolloServer, gql } = require('apollo-server');
const {typeDefs, resolvers} = require('./schema');

const server = new ApolloServer({typeDefs, resolvers})

server.listen(5000);