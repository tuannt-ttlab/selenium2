var login =  require("./login");
var createRoomType = require("./room-type/create-room-type");
var createRoom = require("./room/create-room");
var createPlan = require("./plan/create-plan");
var createTmpBookingFromList = require("./room-booking/create-tmp-booking-from-list");
var createTmpBookingFromSchedule = require("./room-booking/create-tmp-booking-from-schedule");
var createBooking = require("./room-booking/create-booking");
var createSaleGroup = require("./sale/create-sale-group");
var createSaleItem = require("./sale/create-sale-item");
const closeBrowser = [ { action: 'close' } ]

module.exports = [
  {
    data: login,
    name: 'login'
  },
  {
    data: createRoomType,
    name: 'createRoomType'
  },
  {
    data: createRoom,
    name: 'createRoom'
  },
  {
    data: createSaleGroup,
    name: 'createSaleGroup'
  },
  {
    data: createSaleItem,
    name: 'createSaleItem'
  },
  {
    data: createPlan,
    name: 'createPlan'
  },
  {
    data: createTmpBookingFromList,
    name: 'createTmpBookingFromList'
  },
  {
    data: createTmpBookingFromSchedule,
    name: 'createTmpBookingFromSchedule'
  },
  {
    data: createBooking,
    name: 'createBooking'
  },
]
