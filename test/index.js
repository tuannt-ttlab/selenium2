var login = require("./login");
var createRoomType = require("./room-type/create-room-type");
var createRoom = require("./room/create-room");
var createPlan = require("./plan/create-plan");
var createTmpBookingFromList = require("./room-booking/create-tmp-booking-from-list");
var createTmpBookingFromSchedule = require("./room-booking/create-tmp-booking-from-schedule");
var createBooking = require("./room-booking/create-booking");
var createSaleGroup = require("./sale/create-sale-group");
var createSaleItem = require("./sale/create-sale-item");
var createRankCalendar = require("./rank/create-rank");
var createGuestClass = require("./guest/create-guest-class");
var createGuest = require("./guest/create-guest");
var createFacilityType = require("./facility-type/create-facility-type");
var createFacility = require("./facility/create-facility");

const closeBrowser = [
  {
    action: "delay",
    value: 2000,
  },
  { action: "close" },
];

module.exports = [
  {
    data: login,
    name: "login",
  },
  {
    data: createGuestClass,
    name: "createGuestClass",
  },
  {
    data: createGuest,
    name: "createGuest",
  },
  {
    data: createFacilityType,
    name: "createFacilityType",
  },
  {
    data: createFacility,
    name: "createFacility",
  },
  {
    data: createRoomType,
    name: "createRoomType",
  },
  {
    data: createRoom,
    name: "createRoom",
  },
  {
    data: createSaleGroup,
    name: "createSaleGroup",
  },
  {
    data: createSaleItem,
    name: "createSaleItem",
  },
  {
    data: createRankCalendar,
    name: "createRankCalendar",
  },
  {
    data: createPlan,
    name: "createPlan",
  },
  {
    data: createTmpBookingFromList,
    name: "createTmpBookingFromList",
  },
  {
    data: createTmpBookingFromSchedule,
    name: "createTmpBookingFromSchedule",
  },
  {
    data: createBooking,
    name: "createBooking",
  },
  {
    data: closeBrowser,
    name: "closeBrowser",
  },
];
