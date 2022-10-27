var sale = require('../../form/sale')

module.exports = [
  {
    action: 'open',
    value: '/sale-group'
  },
  {
    action: 'await',
    element: '//*[@id="btn-create-sale-group"]',
  },
  {
    action: 'click',
    element: '//*[@id="btn-create-sale-group"]',
  },
  {
    action: 'delay',
    value: 2000,
  },
  // 集計グループ名
  {
    action: "type",
    element: '//*[@id="sale-group-form-items.0.name"]',
    value: sale.saleGroup.name,
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="sale-group-form-submit"]',
  },
  {
    action: 'delay',
    value: 2000,
  }
]