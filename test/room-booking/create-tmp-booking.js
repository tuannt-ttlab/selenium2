var plan = require('../../form/plan');
var room = require('../../form/room');

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
    element: `//*[@id="plan-${plan.name}"]`
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
    element: `//*[@id="roomTypeId-${room.roomType}"]`
  },
  // 部屋名
  {
    action: 'type',
    element: '//*[@id="create-booking-form-roomId"]',
    value: room.initialRoomName,
  },
  {
    action: 'delay',
    value: 1000,
  },
  {
    action: 'click',
    element: `//*[@id="roomId-${room.initialRoomName}"]`
  },
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