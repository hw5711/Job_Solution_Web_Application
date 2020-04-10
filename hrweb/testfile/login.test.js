const timeout = 50000;

describe(
    '/ (Login Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
            await page.goto('http://localhost:4200/login');
            // await page.click('a[name="login"]');
        }, timeout);

        it('should show login page without error', async () => {
            const content = await page.$eval('.pagetitle', el => el.textContent);
            expect(content).toContain('sign in');
        });


    },
    timeout,
);