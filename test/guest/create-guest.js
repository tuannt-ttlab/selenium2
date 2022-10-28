var _guest = require('../../form/guest')

const guest = _guest.guest

module.exports = [
  {
    action: 'open',
    value: '/guest/create-guest'
  },
  {
    action: 'wait',
    element: '//*[@id="guest-form-fullName"]'
  },
  // 氏名
  {
    action: 'type',
    element: '//*[@id="guest-form-fullName"]',
    value: guest.fullName
  },
  // 氏名（ヨミガナ）
  {
    action: 'type',
    element: '//*[@id="guest-form-yomigana"]',
    value: guest.yomigana
  },
  // 電話番号
  {
    action: 'type',
    element: '//*[@id="guest-form-mobilePhoneNumber"]',
    value: guest.phone
  },
  // メールアドレス
  {
    action: 'type',
    element: '//*[@id="guest-form-emailAddress"]',
    value: guest.email
  },
  // 生年月日
  {
    action: 'type',
    element: '//*[@id="guest-form-birthday"]',
    value: guest.birthday
  },
  // 性別
  {
    action: 'type',
    element: '//*[@id="guest-form-gender"]',
    value: guest.gender
  },
  {
    action: 'delay',
    value: 1000
  },
  {
    action: 'click',
    element: `//*[@id="gender-${guest.gender}"]`,
  },
  // submit
  {
    action: 'click',
    element: '//*[@id="guest-form-btn-submit"]'
  },
  {
    action: 'delay',
    value: 2000
  },
]