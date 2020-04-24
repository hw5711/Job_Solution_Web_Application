const timeout = 50000;
const puppeteer = require('puppeteer');

describe(
    '/ (candidate Page)',
    () => {
        let page;
        beforeAll(async () => {
            const browser = await puppeteer.launch({ headless: true });
            page = await browser.newPage();
            await page.goto('http://localhost:4200/login');
            await page.type('input[name=email]', 'c@gmail.com');
            await page.type('input[name=password]', '1');
            await page.click('button[name="login"]');
            await page.waitFor(1000);

        }, timeout);

        it('should show candidate home page without error', async () => {
            // await page.screenshot({ path: 'canPage.png' });
            const content = await page.$eval('.pageFunction', el => el.textContent);
            expect(content).toContain('Search');
        });

    },
    timeout,
);