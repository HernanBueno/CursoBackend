const { Schema } = require('mongoose')
const ContainerFactory = require('../../factories/container.factory')
const DB = ContainerFactory.getContainer('mongodb') // require('../../containers/mongodb.js')

module.exports = class MessageMongo extends DB {
  constructor() {
    super('Message', {
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String,
      timestamp: { type: Number, default: Date.now() }
    })
  }
}