var login =  require("./login");
var createRoomType = require("./room-type/create-room-type");
var createRoom = require("./room/create-room");
var createPlan = require("./plan/create-plan");
var createTmpBookingFromList = require("./room-booking/create-tmp-booking-from-list");
var createTmpBookingFromSchedule = require("./room-booking/create-tmp-booking-from-schedule");
var createBooking = require("./room-booking/create-booking");
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