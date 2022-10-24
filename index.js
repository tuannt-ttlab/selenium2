var puppeteer = require('puppeteer');
var result = require('./test/index');
require('dotenv').config();
const BASE_URL = process.env.BASE_URL
const EXECUTABLE_PATH = process.env.EXECUTABLE_PATH
// test data

function delay(item) {
  return new Promise(function(resolve) {
      setTimeout(resolve, item.value)
  });
}

async function init() {

  const browser = await puppeteer.launch({
      headless: false,
      executablePath: EXECUTABLE_PATH
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