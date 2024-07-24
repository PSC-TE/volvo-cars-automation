import BasePage from "../../src/PageObjects/basePage.js";

const bp = new BasePage()

describe('Accept cookies and land to base page', async() =>{
    it('Click on accept all cookies', async() =>{
        await browser.saveFullPageScreen("beforeCookiesTab");
        await expect(await browser.checkFullPageScreen("beforeCookiesTab")).toEqual(0);

        await bp.clickAcceptCookies();
        await expect(browser).toHaveTitle('Volvo Cars - International');

        await browser.saveFullPageScreen("afterAcceptCookiesTab");
        await expect(await browser.checkFullPageScreen("afterAcceptCookiesTab")).toEqual(0);
    });
});
