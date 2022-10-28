var facilityType = require('../../form/facility-type')

module.exports = [
  {
    action: 'open',
    value: '/facility-type'
  },
  {
    action: 'wait',
    element: '//*[@id="btn-create-facility-type"]'
  },
  {
    action: 'click',
    element: '//*[@id="btn-create-facility-type"]',
  },
  {
    action: 'delay',
    value: 2000
  },
  // 表示名
  {
    action: 'type',
    element: '//*[@id="facility-type-form-name"]',
    value: facilityType.name
  },
  // 略称
  {
    action: 'type',
    element: '//*[@id="facility-type-form-abbreviation"]',
    value: facilityType.abbreviation
  },
  // 営業時間
  {
    action: 'type',
    element: '//*[@id="facility-type-form-businessTimes"]/div/div[1]/input',
    value: facilityType.startTime
  },
  {
    action: 'delay',
    value: 1000,
  },
  {
    action: 'click',
    element: '/html/body/div[2]/div/div/div/div[2]/div[2]/ul/li/button',
  },
  // 営業時間
  {
    action: 'type',
    element: '//*[@id="facility-type-form-businessTimes"]/div/div[3]/input',
    value: facilityType.endTime
  },
  {
    action: 'delay',
    value: 1000,
  },
  {
    action: 'click',
    element: '/html/body/div[2]/div/div/div/div[2]/div[2]/ul/li/button',
  },
  // 定額料金
  {
    action: 'type',
    element: '//*[@id="facility-type-form-price"]',
    value: facilityType.price
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="facility-type-form-btn-submit"]',
  },
  {
    action: 'delay',
    value: 2000
  },
]