var plan = require('../form/plan')

const step1 = [
  { action: 'open', value: '/plan/create-plan' },
  {
    action: 'type',
    element: '//*[@id="staff-layout-content"]/div/main/div/form/div[1]/div/div/div[2]/div[1]/div/div/div[2]/div[1]/div/input',
    value: plan.name,
    field: 'プラン名'
  },
  {
    action: 'type',
    element: '//*[@id="staff-layout-content"]/div/main/div/form/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[1]/div/textarea',
    value: plan.desc,
    field: 'プランの詳細'
  },
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/footer/div/div/div[2]/button',
    comment: 'next'
  },
]

const step2 = [
  {
    action: 'click',
    element: '/html/body/div[1]/section/section/div/main/div/form/div/div[2]/div/div[2]/div/div/div[2]'
  },
  {
    action: 'type',
    element: '/html/body/div[1]/section/section/div/main/div/form/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div/div/input',
    value: plan.room,
    field: '販売する部屋'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: '/html/body/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/main/div/form/div/div[2]/div/div[1]/div/div/div[2]/div[1]',
    field: '料金カレンダー'
  },
  { action: 'delay', value: 1000 },
  {
    action: 'click',
    element: '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div'
  }
]

const submit = [
  {
    action: 'click',
    element: '//*[@id="staff-layout-content"]/div/footer/div/div/div[2]/button',
    comment: 'submit'
  },
  { action: 'delay', value: 2000 },
  { action: 'screenshot', value: 'create_plan' }
]

function getPath(col) {
  return `/html/body/div[1]/section/section/div/main/div/form/div[2]/div/div/div/div[2]/div/div/div/div[3]/div/div/div/div/div/div/div/div/table/tbody/tr/td[${col}]/div/div/div/div/div[1]/div/input`
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