var util = require('../util')

const saleGroup = {
  name: 'sgroup-' + util.makeid(5),
}

const saleItem = {
  quantity: 1,
  saleGroupId: saleGroup.name,
  saleItemPrice: 1000,
  tax: 'tax1',
  name: 'sale-item-' + util.makeid(5),
}

module.exports = {
  saleGroup,
  saleItem,
}