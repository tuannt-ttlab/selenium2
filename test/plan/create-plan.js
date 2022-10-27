var plan = require('../../form/plan')

const step1 = [
  { action: 'open', value: '/plan/create-plan' },
  // プラン名
  {
    action: 'type',
    element: '//*[@id="form-plan-name"]',
    value: plan.name,
    field: 'プラン名'
  },
  // プランの詳細
  {
    action: 'type',
    element: '//*[@id="form-plan-memo"]',
    value: plan.desc,
    field: 'プランの詳細'
  },
  {
    action: 'click',
    element: '//*[@id="form-plan-btn-next"]',
    comment: 'next'
  },
]

const step2 = [
  // 販売する部屋
  {
    action: 'type',
    element: '//*[@id="form-plan-roomTypeIds"]',
    value: plan.room,
    field: '販売する部屋'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: `//*[@id="roomTypeIds-${plan.room}"]`,
    comment: 'select first item'
  },
  { action: 'delay', value: 1000 },
  // 料金カレンダー
  {
    action: 'type',
    element: '//*[@id="form-plan-planRankId"]',
    value: plan.rank
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: `//*[@id="planRankId-${plan.rank}"]`,
    comment: 'select first item'
  }
]

const submit = [
  // submit
  {
    action: 'click',
    element: '//*[@id="form-plan-btn-submit"]',
    comment: 'submit'
  },
  { action: 'delay', value: 2000 },
]
function getPath(col, row = 0) {
  return `//*[@id="form-plan-planRoomTypes.${row}.planRoomTypePricings.${col}.price"]`
}

for (let index = 0; index <= 7; index++) {
  const path = getPath(index)
  step2.push({
    action: 'type',
    element: path,
    value: 100
  })
}

const result = step1.concat(step2).concat(submit)

module.exports = result