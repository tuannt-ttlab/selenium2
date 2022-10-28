var room = require('./room')
var util = require('../util')
var sale = require('./sale')
var rank = require('./rank')
var _faker = require("@faker-js/faker");
const faker = _faker.faker;

module.exports = {
  name: 'plan-' + util.makeid(5),
  desc: 'plan desc',
  room: room.roomType,
  rank: rank.name,
  saleItem:  {
    name: sale.saleItem.name,
    price: faker.commerce.price(1000, 10000, 0),
    quantity: 1
  },
  price: faker.commerce.price(1000, 10000, 0)
}