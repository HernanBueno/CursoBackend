const { buildSchema } = require('graphql')

const schema = `
  type Product {
    id: String!,
    name: String,
    description: String,
    code: String,
    image: String,
    price: Int,
    stock: Int
  },
  input ProductInput {
    name: String,
    description: String,
    code: String,
    image: String,
    price: String
  },
  type Query {
    getAllProducts(price: Int): [Product]
  },
  type Mutation {
    createProduct(data: ProductInput): Product
  }
`

module.exports = buildSchema(schema)