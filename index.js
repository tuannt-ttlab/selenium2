var puppeteer = require('puppeteer');
const excelToJson = require('convert-excel-to-json');
var _ = require('lodash');

// const result = excelToJson({
// 	sourceFile: './input/testcase.xlsx',
//   header:{
//     rows: 1
//   },
//   columnToKey: {
// 		A: 'action',
// 		B: 'element',
// 		C: 'value',
// 	}
// });
const BASE_URL = 'http://localhost:8088'

// test data
const result  = {
  Login: [
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
  ],
  CreateBookingFromListt: [
    { action: 'open', value: '/room-booking' },
    {
      action: 'click',
      element: '//*[@id="staff-layout-content"]/div/main/div/div/div[1]/button'
    },
    {
      action: 'delay',
      element: 3000
    },
    {
      action: 'click',
      element: '/html/body/div[5]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[1]/div/div/div/div[2]/div[1]'
    },
    {
      action: 'type',
      element: '/html/body/div[5]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/form/div[1]/div/div/div/div[2]/div[1]/div/div/div/span[1]/input',
      value: 'single'
    }
  ]
}

console.log(result)


function delay(item) {
  return new Promise(function(resolve) {
      setTimeout(resolve, item.value)
  });
}

async function init() {

  const browser = await puppeteer.launch({
      headless: false,
      executablePath: "/usr/local/bin/chromium"
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});

  const gotoPage = async (item) => {
    await page.goto(/^http/.test(item.value) ? item.value :  (item.value ? BASE_URL + item.value : BASE_URL));
  }

  const reload = (item) => {
    return page.reload();
  }

  const clickPosistion = async (item) => {
    const elements = await page.$x(item.element)
    if(!elements.length) return
    const rect  = await page.evaluate(el => {
      const {x, y} = el.getBoundingClientRect();
      return {x, y};
    }, elements[0]);
    await page.mouse.click(rect.x + 5, rect.y + 5);
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
    console.log('elements.length', elements.length);
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
    clickPoint: clickPosistion,
    type: typeElement,
    close: closeBrowser,
    delay: delay,
    reload: reload,
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