import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  server.applyMiddleware({ app });
  //console.log(process.env.MONGO_PASSWORD);
  //mongodb + srv://tester:<password>@cluster0-prtzd.gcp.mongodb.net/test?retryWrites=true&w=majority
  await mongoose.connect(`mongodb+srv://tester:${process.env.MONGO_PASSWORD}@cluster0-prtzd.gcp.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });

  app.listen({ port: 4000 }, () => {
    console.log(`Server is ready and listening on http://localhost:4000${server.graphqlPath}`);
  });
};

startServer().catch(error => {
  console.log('Error in start server', error);
});

