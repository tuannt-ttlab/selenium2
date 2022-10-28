var _guest = require('../../form/guest')

const guest = _guest.guestClass

module.exports = [
  {
    action: 'open',
    value: '/guest-classification'
  },
  {
    action: 'wait',
    element: '//*[@id="guest-class-form-btn-create"]'
  },
  {
    action: 'click',
    element: '//*[@id="guest-class-form-btn-create"]',
  },
  {
    action: 'delay',
    element: 2000
  },
  {
    action: 'type',
    element: '//*[@id="guest-class-form-name"]',
    value: guest.name
  },
  {
    action: 'clickPoint',
    element: '//*[@id="guest-class-form-color"]',
  },
  {
    action: 'delay',
    element: 1000
  },
  {
    action: 'click',
    element: '//*[@id="guest-class-form-btn-submit"]',
  },
  {
    action: 'delay',
    value: 2000
  },
]