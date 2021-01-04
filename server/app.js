const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://swapnil:Imswap@77@gql-intution.ze5uz.mongodb.net/test', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on 4000');
});
