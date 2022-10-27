var sale = require('../../form/sale')

module.exports = [
  {
    action: 'open',
    value: '/sale-item/create-sale-item'
  },
  {
    action: 'await',
    element: '//*[@id="sale-item-form-quantity"]',
  },
  // 数量
  {
    action: 'type',
    element: '//*[@id="sale-item-form-quantity"]',
    value: sale.saleItem.quantity
  },
  // 集計グループ
  {
    action: 'type',
    element: '//*[@id="sale-item-form-saleGroupId"]',
  },
  {
    action: 'delay',
    value: 1000
  },
  {
    action: 'click',
    element: `//*[@id="saleGroupId-${sale.saleItem.saleGroupId}"]`,
  },
  // 標準価格（円）
  {
    action: 'type',
    element: '//*[@id="sale-item-form-saleItemPrice"]',
    value: sale.saleItem.saleItemPrice
  },
  // 消費税区分
  {
    action: 'type',
    element: '//*[@id="sale-item-form-taxId"]',
    value: sale.saleItem.tax
  },
  {
    action: 'delay',
    value: 1000
  },
  {
    action: 'click',
    element: `//*[@id="taxId-${sale.saleItem.tax}"]`,
  },
  // generate
  {
    action: 'click',
    element: `//*[@id="sale-item-form-btn-generate"]`,
  },
  {
    action: 'delay',
    value: 1000
  },
  // 科目
  {
    action: 'type',
    element: '//*[@id="sale-item-form-items.0.name"]',
    value: sale.saleItem.name
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="sale-item-form-btn-submit"]',
  },
  {
    action: 'delay',
    value: 2000
  },
]