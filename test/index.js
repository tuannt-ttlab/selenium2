var login =  require("./login");
var createRoomType = require("./create-room-type");
var createRoom = require("./create-room");
var createPlan = require("./create-plan");

const closeBrowser = [ { action: 'close' } ]

module.exports = {
  ['1login']: login,
  // ['2createRoomType']: createRoomType,
  // ['3createRoom']: createRoom,
  ['4createPlan']: createPlan,
  // ['9999closeBrowser']: closeBrowser,
}