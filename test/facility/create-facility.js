var facility = require('../../form/facility')

module.exports = [
  { action: 'open', value: '/facility/create-facility' },
  { action: 'delay', value: 2000 },
  {
    action: 'wait',
    element: '//*[@id="facility-form-quantity"]'
  },
  // 数量
  {
    action: 'type',
    element: '//*[@id="facility-form-quantity"]',
    value: facility.quantity,
    field: '数量'
  },
  // 設備タイプ
  {
    action: 'type',
    element: '//*[@id="facility-form-facilityTypeId"]',
    value: facility.type,
    filed: '部屋タイプ'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: `//*[@id="facilityTypeId-${facility.type}"]`,
    comment: 'select first item'
  },
  // 開始番号
  {
    action: 'type',
    element: '//*[@id="facility-form-initialFacilityName"]',
    value: facility.initialFacilityName,
    field: '開始番号'
  },
  // 適応する
  {
    action: 'click',
    element: '//*[@id="facility-form-btn-submit"]'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: '//*[@id="facility-form-generate-button"]',
    comment: 'click 適応する'
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="facility-form-btn-submit"]',
    comment: 'click 保存 (submit)'
  },
  { action: 'delay', value: 3000 },
]