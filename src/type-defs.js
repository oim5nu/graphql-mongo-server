import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    foo: String!
    cats: [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!  
  }
`;