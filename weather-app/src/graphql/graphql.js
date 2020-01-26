// express server example of graphql
const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const GRAPHQL_PORT = process.env.PORT || 4000;

// construct a schema 
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// root will provide resolver function
const root = {
    hello: () => {
        return 'Hello World';
    },   
};


const app = express();
app.use('/graphql', graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(GRAPHQL_PORT, () => {
    console.log(`Graphql Server has started on port ${GRAPHQL_PORT}`);
});


// hello world example of graphql
// const { graphql, buildSchema } = require('graphql');

// // construct a schema 
// const schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

// // root will provide resolver function
// const root = {
//     hello: () => {
//         return 'Hello World';
//     },   
// };

// graphql(schema, '{ hello }', root).then((res) => {
//     console.log('The value is: ', res);
// });

