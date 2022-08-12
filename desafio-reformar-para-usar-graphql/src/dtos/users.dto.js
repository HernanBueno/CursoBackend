class UsersDTO {
  constructor(data) {
      this.id = data._id
      this.email = data.email
      this.name = `${data.firstname} ${data.lastname}`
      this.firstname = data.firstname
      this.lastname = data.lastname
      this.age = data.age
      this.avatar = data.avatar
      this.address = data.address
      this.cellphone = data.cellphone
  }
}

module.exports = UsersDTO