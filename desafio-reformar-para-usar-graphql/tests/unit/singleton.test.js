const expect = require('chai').expect

describe('module instance as singleton', () => {

  it('should be a singleton', () => {
    module1 = require('../../src/services/multer')
    module2 = require('../../src/services/multer')

    expect(module1 === module2).to.be.true
  })
})