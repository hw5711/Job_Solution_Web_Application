
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    //const page2 = await browser.newPage();
    await page.goto('localhost:4200');

    await page.waitFor(1000);
    await page.click('a[name="login"]');
    // await page.screenshot({ path: 'login.png' });
    await page.waitFor(1000);
    await page.type('input[name=email]', 'hrtest@gmail.com');
    await page.type('input[name=password]', '1');
    
    await page.waitFor(1000);
  
    var selected = await page.evaluate(() => {
        return document.querySelector(`select [value="HR"]`).selected = true
    });
    
    await page.waitFor(1000);
    await page.click('button[name="login"]');
    await page.waitFor(2000);
    // await page.screenshot({ path: 'mainPage.png' });
    await browser.close();
})();


// https://github.com/puppeteer/puppeteer/issues/1030