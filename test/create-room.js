var room = require('../form/room')

module.exports = [
  { action: 'open', value: '/room/create-individual' },
  { action: 'delay', value: 2000 },
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[1]/div[2]/div/div/div[2]/div[1]/div/div/div'
  },
  // 部屋タイプ
  {
    action: 'type',
    element: '/html/body/div[1]/section/section/div/main/div/div/div[1]/div/form/div[1]/div[2]/div/div/div[2]/div[1]/div/div/div/span[1]/input',
    value: room.roomType,
    filed: '部屋タイプ'
  },
  {
    action: 'click',
    element: '/html/body/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]',
    comment: 'select first item'
  },
  // 数量
  {
    action: 'type',
    element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[1]/div[1]/div/div/div[2]/div[1]/div/input',
    value: room.quantity,
    field: '数量'
  },
  // 開始番号
  {
    action: 'type',
    element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[1]/div[3]/div/div/div[2]/div[1]/div/input',
    value: room.initialRoomName,
    field: '開始番号'
  },
  // 適応する
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/footer/div/div/div[2]/button'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[2]/div/div/div/div/div/button',
    comment: 'click 適応する'
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/footer/div/div/div[2]/button',
    comment: 'click 保存 (submit)'
  },
  { action: 'delay', value: 3000 },
  { action: 'screenshot', value: 'create_room' }
]