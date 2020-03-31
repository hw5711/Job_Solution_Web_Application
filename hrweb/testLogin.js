
const puppeteer = require('puppeteer');

test('test login function', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    //const page2 = await browser.newPage();
    await page.goto('localhost:4200');

    await page.waitFor(1000);
    await page.click('a[name="login"]');
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
    console.log("this is the title of the page : " + title );
        expect(title).toBe(
            "HR page"
        );
    // await page.screenshot({ path: 'mainPage.png' });
    // await browser.close();
})();
