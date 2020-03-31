const timeout = 50000;

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
            await page.goto('http://localhost:4200');
        }, timeout);

        it('should show home page without error', async () => {
            const title = await page.title();
            expect(title).toBe('Job Home');
        });

    },
    timeout,
);