const ProductsDTO = require('../dtos/products.dto')
const MessagesDTO = require('../dtos/messages.dto')
const CartsDTO = require('../dtos/carts.dto')
const UsersDTO = require('../dtos/users.dto')

class DTOFactory {
  static makeDTO(dto, data) {
    switch (dto) {
      case 'products':
        return new ProductsDTO(data)
      case 'messages':
        return new MessagesDTO(data)
      case 'carts':
        return new CartsDTO(data)
      case 'users':
        return new UsersDTO(data)
    }
  }
  static getDTO(dto) {
    switch (dto) {
      case 'products':
        return ProductsDTO
      case 'messages':
        return MessagesDTO
      case 'carts':
        return CartsDTO
      case 'users':
        return UsersDTO
    }
  }
}

module.exports = DTOFactory