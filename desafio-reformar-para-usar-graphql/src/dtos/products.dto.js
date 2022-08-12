class ProductsDTO {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.description = data.description
    this.code = data.code
    this.image = data.image
    this.price = data.price
    this.stock = data.stock
  }
}

module.exports = ProductsDTO