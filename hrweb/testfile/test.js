const timeout = 5000;

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
            await page.goto('http://localhost:4200');
        }, timeout);

        it('should load without error', async () => {
            // const text = await page.evaluate(() => document.body.textContent);
            const title = await page.title();
            console.log("for testing: " + title);
            expect(title).toBe('Job Home');
        });
    },
    timeout,
);