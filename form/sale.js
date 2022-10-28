var _faker = require("@faker-js/faker");
var util = require('../util')

const faker = _faker.faker;

const saleGroup = {
  name: 'sgroup-' + util.makeid(5),
}

const saleItem = {
  quantity: 1,
  saleGroupId: saleGroup.name,
  saleItemPrice: faker.commerce.price(1000, 10000, 0),
  tax: 'tax1',
  name: 'sale-item-' + util.makeid(5),
}

module.exports = {
  saleGroup,
  saleItem,
}