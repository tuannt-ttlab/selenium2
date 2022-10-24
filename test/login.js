module.exports = [
  { action: 'open' },
  {
    action: 'wait',
    element: '//*[@id="root"]/section/section/main/div/div/form/div[1]/div/div/div/div[2]/div[1]/div/input'
  },
  {
    action: 'type',
    element: '//*[@id="root"]/section/section/main/div/div/form/div[1]/div/div/div/div[2]/div[1]/div/input',
    value: 'tuannt@tokyotechlab.com'
  },
  {
    action: 'type',
    element: '//*[@id="root"]/section/section/main/div/div/form/div[2]/div/div/div/div[2]/div[1]/div/input',
    value: 'Center@1234'
  },
  {
    action: 'click',
    element: '//*[@id="root"]/section/section/main/div/div/form/div[4]/div/div/button'
  },
  {
    action: 'wait',
    element: '//*[@id="root"]/section/aside[1]/div/div[1]'
  },
  { action: 'delay', value: 2000 },
  { action: 'screenshot', value: 'dashboard' }
]