class MessagesDTO {
  constructor(data) {
    this.author = data.author
    this.text = data.text
    this.timestamp = data.timestamp
  }
}

module.exports = MessagesDTO