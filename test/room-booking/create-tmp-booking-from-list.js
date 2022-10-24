
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
  { action: 'screenshot', value: 'create-room-booking-from-list' }
]


module.exports = openForm;
