var _faker = require('@faker-js/faker')
const faker = _faker.faker
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

module.exports = {
  representativeGuest: {
    yomigana: firstName,
    fullName: lastName,
    phone: faker.phone.number('##########'),
    email: faker.internet.email(firstName, lastName)
  }
}