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
            await page.waitFor(3000);
        }, timeout);

        it('should show candidate home page without error', async () => {
            const content = await page.$eval('.pageFunction', el => el.textContent);
            expect(content).toContain('Search');
        });

        it('should show job search result after searching', async () => {

            // await page.click(
            //     "#mat - option - 3 > span"
            // );
            const result = await page.evaluateHandle(() => {
                return document.querySelector(
                    '#mat-select-0 > div > div.mat-select-arrow-wrapper > div'
                );
            })
            result.click();
            await page.click('button[name="search"]');
            // await page.screenshot({ path: 'hrPage.png' });
            const content = await page.$eval('.applybutton', el => el.textContent);
            expect(content).toContain('Apply');
        });

    },
    timeout,
);