const DB = require('../../containers/mongodb.js')

module.exports = class CartMongo extends DB {
  constructor() {
    super('carts', {
      userId: String,
      products: [
        {
          name: String,
          description: String,
          code: String,
          image: String,
          price: Number,
          stock: Number,
          timestamp: Number
        }
      ],
      timestamp: { type: Number, default: Date.now() }
    })
  }

  async getByUserId(id) {
    const item = await this.model.findOne({ userId: id }).lean()
    return item
  }

  async empty(id) {
    await this.update(id, { products: [] })
  }
}