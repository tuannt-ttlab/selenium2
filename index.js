var puppeteer = require('puppeteer');
const excelToJson = require('convert-excel-to-json');
var _ = require('lodash');

const result = excelToJson({
	sourceFile: './input/testcase.xlsx',
  header:{
    rows: 1
  },
  columnToKey: {
		A: 'action',
		B: 'element',
		C: 'value',
	}
});

// const result = {
//   Login: [
//     { action: 'open', value: 'https://pms.dev.tabist.co.jp/' },
//     {
//       action: 'wait',
//       element: '//*[@id="root"]/section/section/main/div/div/form/div[1]/div/div/div/div[2]/div[1]/div/input'
//     },
//     {
//       action: 'type',
//       element: '//*[@id="root"]/section/section/main/div/div/form/div[1]/div/div/div/div[2]/div[1]/div/input',
//       value: 'tuannt@tokyotechlab.com'
//     },
//     {
//       action: 'type',
//       element: '//*[@id="root"]/section/section/main/div/div/form/div[2]/div/div/div/div[2]/div[1]/div/input',
//       value: 'Center@1234'
//     },
//     {
//       action: 'click',
//       element: '//*[@id="root"]/section/section/main/div/div/form/div[4]/div/div/button'
//     },
//     {
//       action: 'wait',
//       element: '//*[@id="root"]/section/aside[1]/div/div[1]'
//     },
//     { action: 'delay', value: 2000 },
//     { action: 'screenshot', value: 'dashboard' },
//   ],
//   // CreateRoomType: [
//   //   { action: 'open', value: 'https://pms.dev.tabist.co.jp/room-type' },
//   //   { action: 'delay', value: 2000 },
//   //   {
//   //     action: 'click',
//   //     element: '//*[@id="staff-layout-content"]/section/main/div/div[1]/div[1]/div[2]/button'
//   //   },
//   //   { action: 'delay', value: 2000 },
//   //   {
//   //     action: 'type',
//   //     element: '//*[@id="staff-layout-content"]/section/main/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/form/div[1]/div/div/div/div[2]/div[1]/div/input',
//   //     value: 'single1'
//   //   },
//   //   {
//   //     action: 'type',
//   //     element: '/html/body/div/section/section/section/main/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/form/div[2]/div[1]/div/div/div[2]/div[1]/div/input',
//   //     value: '1'
//   //   },
//   //   {
//   //     action: 'type',
//   //     element: '//*[@id="staff-layout-content"]/section/main/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/form/div[2]/div[2]/div/div/div[2]/div[1]/div/input',
//   //     value: '1'
//   //   },
//   //   {
//   //     action: 'click',
//   //     element: '//*[@id="staff-layout-content"]/section/main/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/form/div[4]/div/div/div[2]/div/div[2]/div/div/span'
//   //   },
//   //   {
//   //     action: 'click',
//   //     element: '//*[@id="staff-layout-content"]/section/main/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/button'
//   //   },
//   //   { action: 'delay', value: 3000 },
//   //   { action: 'screenshot', value: 'create_room_type' }
//   // ],
//   CreateRoom: [
//     { action: 'open', value: 'https://pms.dev.tabist.co.jp/room/create-individual' },
//     { action: 'delay', value: 2000 },
//     {
//       action: 'click',
//       element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[1]/div[2]/div/div/div[2]/div[1]/div/div/div',
//     },
//     {
//       action: 'type',
//       element: '/html/body/div[1]/section/section/div/main/div/div/div[1]/div/form/div[1]/div[2]/div/div/div[2]/div[1]/div/div/div/span[1]/input',
//       value: 'single1'
//     },
//     {
//       action: 'click',
//       element: '/html/body/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]',
//     },
//     {
//       action: 'type',
//       element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[1]/div[1]/div/div/div[2]/div[1]/div/input',
//       value: '2'
//     },
//     {
//       action: 'type',
//       element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[1]/div[3]/div/div/div[2]/div[1]/div/input',
//       value: '10'
//     },
//     {
//       action: 'click',
//       element: '//*[@id="staff-layout-content"]/div/footer/div/div/div[2]/button',
//     },
//     { action: 'delay', value: 1000 },
//     {
//       action: 'click',
//       element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/div/form/div[2]/div/div/div/div/div/button',
//     },
//     {
//       action: 'click',
//       element: '//*[@id="staff-layout-content"]/div/footer/div/div/div[2]/button',
//     },
//     { action: 'delay', value: 2000 },
//     { action: 'screenshot', value: 'create_room' }
//   ]
// }

// console.log(result)

function delay(item) {
  return new Promise(function(resolve) {
      setTimeout(resolve, item.value)
  });
}

async function init() {

  const browser = await puppeteer.launch({
      headless: false,
      executablePath: "/opt/homebrew/bin/chromium"
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});

  const gotoPage = async (item) => {
    await page.goto(item.value);
  }

  const waitForSelector = async (item) => {
    if(item.value === 'selector') {
      return page.waitForSelector(item.value)
    }
    return page.waitForXPath(item.element);
  }

  const clickElement = async (item) => {
    if(item.value === 'selector') {
      return page.click(item.element)
    }
    const elements = await page.$x(item.element)
    if(!elements.length) return
    await elements[0].click()
  }

  const typeElement = async (item) => {
    const elements = await page.$x(item.element)
    if(!elements.length) return
    await elements[0].type(`${item.value}`);
  }

  const screenshot = async (item) => {
    await page.screenshot({ path: `./screenshots/${item.value}.jpeg` });
  }

  const closeBrowser = async (item) => {
    await browser.close();
  }

  const options = {
    open: gotoPage,
    wait: waitForSelector,
    click: clickElement,
    type: typeElement,
    close: closeBrowser,
    delay: delay,
    screenshot: screenshot,
  }

  for (const key in result) {
    const list = result[key];
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      if(options[item.action]) {
        await options[item.action](item);
      }
    }
  }
}

init()