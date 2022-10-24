var login =  require("./login");
var createRoomType = require("./create-room-type");
var createRoom = require("./create-room");
var createPlan = require("./create-plan");
var createTmpBookingFromList = require("./create-tmp-booking-from-list");
var createTmpBookingFromSchedule = require("./create-tmp-booking-from-schedule");
var createBooking = require("./create-booking");
const closeBrowser = [ { action: 'close' } ]

module.exports = {
  ['1login']: login,
  // ['2createRoomType']: createRoomType,
  // ['3createRoom']: createRoom,
  // ['4createPlan']: createPlan,
  // ['5createTmpBookingFromList']: createTmpBookingFromList,
  // ['6createTmpBookingFromSchedule']: createTmpBookingFromSchedule,
  ['7createBooking']: createBooking,
  // ['9999closeBrowser']: closeBrowser,
}