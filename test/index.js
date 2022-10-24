var login =  require("./login");
var createRoomType = require("./create-room-type");
var createRoom = require("./create-room");
var createPlan = require("./create-plan");
var createTmpBookingFromList = require("./create-tmp-booking-from-list");

const closeBrowser = [ { action: 'close' } ]

module.exports = {
  ['1login']: login,
  // ['2createRoomType']: createRoomType,
  // ['3createRoom']: createRoom,
  // ['4createPlan']: createPlan,
  ['5createTmpBookingFromList']: createTmpBookingFromList,
  // ['9999closeBrowser']: closeBrowser,
}