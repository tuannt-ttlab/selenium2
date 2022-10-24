var plan = require('../form/plan');
var room = require('../form/room');

module.exports = [
  // プラン
  {
    action: 'type',
    element: '//*[@id="create-booking-form-plan"]',
    value: plan.name,
    field: 'プラン'
  },
  {
    action: 'delay',
    value: 1000,
  },
  {
    action: 'click',
    element: '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[1]'
  },
  // 部屋タイプ
  {
    action: 'type',
    element: '//*[@id="create-booking-form-roomTypeId"]',
    value: room.roomType,
    field: '部屋タイプ'
  },
  {
    action: 'delay',
    value: 1000,
  },
  {
    action: 'click',
    element: '/html/body/div[15]/div/div/div/div[2]/div[1]/div/div/div'
  },
  // 部屋名
  // 大人
  {
    action: 'type',
    element: '//*[@id="create-booking-form-numberOfAdults"]',
    value: 1
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="create-booking-form-submit"]'
  },
  {
    action: 'delay',
    value: 3000,
  },
]