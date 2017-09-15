const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf8')
const resolvers = require('./resolvers');
const cors = require('cors');

const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

var app = express();

// POST需要用到bodyParser
app.use('/graphql',
  cors(),
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.use('/graphiql',
  graphiqlExpress({ endpointURL: '/graphql'})
);

app.listen(3001);
