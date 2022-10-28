var _faker = require("@faker-js/faker");
var util = require('../util')

const faker = _faker.faker;

const fullName = faker.name.fullName();
const yomigana = faker.name.firstName();


var guest = {
  fullName: faker.name.fullName(),
  yomigana: faker.name.firstName(),
  phone: faker.phone.number("##########"),
  email: faker.internet.email(yomigana, fullName),
  birthday: faker.date.past(20, '2020-01-01').toISOString().split('T')[0],
  gender: '男性'
};

var guestClass = {
  name: 'class-' + util.makeid(5),
  color: '#000000'
}

module.exports = {guest, guestClass};
