import BasePage from "../../src/PageObjects/basePage.js";

const bp = new BasePage()

describe('Reject cookies and land to base page', async() =>{
    it('Click on reject all cookies', async() =>{
        await browser.saveFullPageScreen("beforeRejectCookiesTab");
        await expect(await browser.checkFullPageScreen("beforeRejectCookiesTab")).toEqual(0);

        await bp.clickRejectCookies();
        await expect(browser).toHaveTitle('Volvo Cars - International');

        await browser.saveFullPageScreen("afterRejectCookiesTab");
        await expect(await browser.checkFullPageScreen("afterRejectCookiesTab")).toEqual(0);
    });
});
