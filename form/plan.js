var room = require('./room')
var util = require('../util')
var sale = require('./sale')
var rank = require('./rank')

module.exports = {
  name: 'plan-' + util.makeid(5),
  desc: 'plan desc',
  room: room.roomType,
  rank: rank.name,
  saleItem:  {
    name: sale.saleItem.name,
    price: 1000,
    quantity: 1
  }
}