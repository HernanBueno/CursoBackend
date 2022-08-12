const ModelFactory = require('../../../factories/model.factory')
const Product = ModelFactory.getModel('product')

module.exports = {
  createProduct: async ({ data }) => {
    return await Product.save(data)
  },
  getAllProducts: () => Product.getAll()
}