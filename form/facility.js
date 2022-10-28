var facilityType = require('./facility-type')
var util = require('../util')

module.exports = {
  quantity: 1,
  type: facilityType.name,
  initialFacilityName: util.makeid(5),
}