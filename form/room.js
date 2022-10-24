var roomType = require('./room-type')
var util = require('../util')

module.exports = {
  quantity: 1,
  roomType: roomType.name,
  initialRoomName: util.makeid(5),
}