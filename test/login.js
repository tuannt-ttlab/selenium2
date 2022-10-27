var login = require('../form/login')

module.exports = [
  { action: 'open', value: '/login' },
  {
    action: 'wait',
    element: '//*[@id="login-email"]'
  },
  {
    action: 'type',
    element: '//*[@id="login-email"]',
    value: login.email
  },
  {
    action: 'type',
    element: '//*[@id="login-password"]',
    value: login.password
  },
  {
    action: 'click',
    element: '//*[@id="login-submit"]'
  },
  {
    action: 'wait',
    element: '//*[@id="root"]/section/aside[1]/div/div[1]',
    comment: 'logo'
  },
  { action: 'delay', value: 2000 },
  { action: 'screenshot', value: 'dashboard' }
]