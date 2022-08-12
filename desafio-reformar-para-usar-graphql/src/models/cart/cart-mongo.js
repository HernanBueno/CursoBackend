const { Schema } = require('mongoose')
const ContainerFactory = require('../../factories/container.factory')
const DB = ContainerFactory.getContainer('mongodb') // require('../../containers/mongodb.js')

module.exports = class CartMongo extends DB {
  constructor() {
    super('Cart', {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
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