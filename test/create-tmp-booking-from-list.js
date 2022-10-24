const createBooking = require('./create-tmp-booking');

const openForm = [
  {
    action: 'open',
    value: '/room-booking'
  },
  {
    action: 'click',
    element: '//*[@id="btn-add-booking"]'
  },
  {
    action: 'delay',
    value: 2000,
  },
]

const step = openForm.concat(createBooking);

module.exports = step;
