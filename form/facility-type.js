var util = require('../util')
var _faker = require("@faker-js/faker");
const faker = _faker.faker;

module.exports = {
  name: 'facility-type-' + util.makeid(5),
  abbreviation: 1,
  startTime: '10:00',
  endTime: '20:00',
  price: faker.commerce.price(1000, 10000, 0)
}