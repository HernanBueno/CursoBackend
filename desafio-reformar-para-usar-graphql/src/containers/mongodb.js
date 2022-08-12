const { Schema, model } = require('mongoose')
const DTOFactory = require('../factories/dto.factory')

class MongoContainer {
  constructor(name, schema) {
    this.model = model(name, new Schema(schema))
    this.name = name
  }

  async getAll() {
    const items = await this.model.find({})
    return items.map(item => DTOFactory.makeDTO(this.name, item))
  }

  async getById(id) {
    const item = await this.model.findById(id)
    if (!item) throw new Error('Item not found')
    return DTOFactory.makeDTO(this.name, item)
  }

  async save(data) {
    const item = await this.model.create(data)
    return DTOFactory.makeDTO(this.name, item)
  }

  async update(id, data) {
    const item = await this.model.findByIdAndUpdate(id, data)
    if (!item) throw new Error('Item not found')
  }

  async delete(id) {
    const item = await this.model.findByIdAndDelete(id)
    if (!item) throw new Error('Item not found')
  }

  async deleteAll() {
    await this.model.deleteMany({})
  }
}

module.exports = MongoContainer