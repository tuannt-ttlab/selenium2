var room = require('./room')
var util = require('../util')

module.exports = {
  name: 'plan-' + util.makeid(5),
  desc: 'plan desc',
  room: room.roomType,
}