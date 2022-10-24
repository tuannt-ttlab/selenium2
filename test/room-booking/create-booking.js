var bookingForm = require('../../form/create-booking');

const gotoPage = [
  {
    action: 'open',
    value: '/room-booking/schedule'
  },
  {
    action: 'wait',
    element: '//*[@id="btn-goto-create-booking"]'
  },
  {
    action: 'click',
    element: '//*[@id="btn-goto-create-booking"]'
  },
  {
    action: 'wait',
    element: '//*[@id="createBookingFormPage-form-basicInfoTab"]'
  },
]

const representativeGuest = [
  // 宿泊者名前 (ヨミガナ)
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.yomigana"]',
    value: bookingForm.representativeGuest.yomigana
  },
  // 宿泊者名前
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.fullName"]',
    value: bookingForm.representativeGuest.fullName
  },
  // 電話番号
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.phone"]',
    value: bookingForm.representativeGuest.phone
  },
  // メールアドレス
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.emailAddress"]',
    value: bookingForm.representativeGuest.email
  },
  // 生年月日
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.birthday"]',
    value: '2000-01-01'
  },
  // 性別
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.gender"]',
    value: '男性'
  },
  {
    action: 'delay',
    value: 1000,
  },
  {
    action: 'click',
    element: '//*[@id="representativeGuest.gender-0-男性"]'
  },
]

const basicInfo = [
  {
    action: 'type',
    element: '//*[@id="createBookingFormPage-form-representativeGuest.birthday"]'
  }
]


const createBooking = gotoPage.concat(representativeGuest);

module.exports = createBooking