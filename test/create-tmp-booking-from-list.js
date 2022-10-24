const createBooking = require('./create-tmp-booking');

const openForm = [
  {
    action: 'open',
    value: '/room-booking'
  },
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/button'
  },
  {
    action: 'delay',
    value: 3000,
  },
]

const step = openForm.concat(createBooking);

module.exports = step;
