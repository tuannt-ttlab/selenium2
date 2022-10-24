var plan = require('../form/plan')

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
    element: '/html/body/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]',
    comment: 'select first item'
  },
  { action: 'delay', value: 1000 },
  // 料金カレンダー
  {
    action: 'click',
    element: '//*[@id="form-plan-planRankId"]',
    field: '料金カレンダー'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div',
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
  { action: 'screenshot', value: 'create_plan' }
]
function getPath(col, row = 0) {
  return `//*[@id="form-plan-planRoomTypes.${row}.planRoomTypePricings.${col}.price"]`
}

for (let index = 2; index < 10; index++) {
  const path = getPath(index)
  step2.push({
    action: 'type',
    element: path,
    value: 100
  })
}

const result = step1.concat(step2).concat(submit)

module.exports = result