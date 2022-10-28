var rank = require('../../form/rank')

module.exports = [
  {
    action: 'open',
    value: '/rank-calendar'
  },
  {
    action: 'wait',
    element: '//*[@id="btn-add-rank-calendar"]'
  },
  {
    action: 'click',
    element: '//*[@id="btn-add-rank-calendar"]'
  },
  {
    action: 'delay',
    value: 2000
  },
  {
    action: 'type',
    element: '//*[@id="rank-calendar-form-name"]',
    value: rank.name
  },
  {
    action: 'click',
    element: '//*[@id="rank-calendar-form-submit"]'
  },
  {
    action: 'delay',
    value: 2000
  },
]