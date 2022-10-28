var puppeteer = require('puppeteer');
var result = require('./test/index');
require('dotenv').config();
const BASE_URL = process.env.BASE_URL
const EXECUTABLE_PATH = process.env.EXECUTABLE_PATH
// test data
var args = process.argv.slice(2);
const option = {}

if(args.length) {
  args.forEach(item => {
    const [key, value] = item.split('=')
    option[key] = value
  })
}
console.log('option', option)

function delay(item) {
  return new Promise(function(resolve) {
      setTimeout(resolve, item.value)
  });
}

async function init() {

  const browser = await puppeteer.launch({
      headless: option['headless'] == 'true' ? true : false,
      executablePath: EXECUTABLE_PATH,
      slowMo: 10,
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
      const elements = await page.$(item.element)
      console.log('elements', elements.length)
      if(!elements.length) return
      await elements[0].click()
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
    clickPoint: clickPosistion,
    type: typeElement,
    close: closeBrowser,
    delay: delay,
    reload: reload,
    screenshot: screenshot,
  }

  if(option['cases']) {
    const cases = option['cases'].split(',')
    result = result.filter(item => {
      const isLogin = item.name === 'login'
      const inCases = cases.includes(item.name)
      const isClose = option['close'] === 'false' ? false : true
      const needClose = item.name === 'closeBrowser'
      return isLogin || inCases || (needClose && isClose)
    })
  }

  for (let i = 0; i < result.length; i++) {
    const testcase = result[i];
    for (let index = 0; index < testcase.data.length; index++) {
      const item = testcase.data[index];
      if(options[item.action]) {
        await options[item.action](item);
      }
    }
    console.log('done', testcase.name)
  }
}

init()