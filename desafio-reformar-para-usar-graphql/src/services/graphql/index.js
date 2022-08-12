const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/products.schema')
const productsResolver = require('./resolvers/products.resolver')


module.exports = (app) => {
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: productsResolver,
    graphiql: true
  }))
}