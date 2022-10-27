var roomType = require('../../form/room-type')

module.exports = [
  { action: 'open', value: '/room-type' },
  { action: 'delay', value: 2000 },
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/section/main/div/div[1]/div[1]/div[2]/button'
  },
  { action: 'delay', value: 2000 },
  // 表示名
  {
    action: 'type',
    element: '//*[@id="form-room-type-name"]',
    value: roomType.name,
    comment: 'enter room type name',
    field: '表示名'
  },
  // 略称
  {
    action: 'type',
    element: '//*[@id="form-room-type-abbreviation"]',
    value: roomType.abbreviation,
    field: '略称'
  },
  // 標準 定員
  {
    action: 'type',
    element: '//*[@id="form-room-type-standardCapacity"]',
    value: roomType.standardCapacity,
    field: '標準 定員'
  },
  // 販売チャネル
  {
    action: 'click',
    element: '//*[@id="form-room-type-channels.0.delete"]',
    comment: 'remove 販売チャネル'
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/section/main/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/button',
    comment: 'submit'
  },
  { action: 'delay', value: 3000 },
]