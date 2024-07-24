import BasePage from "../../src/PageObjects/basePage.js";

const bp = new BasePage()
const baseURL = 'https://www.volvocars.com/intl/v/safety/a-million-more';

describe('Check the home page link', async() =>{
    it('Visual testing of visit home page button', async() =>{

        await bp.clickRejectCookies();

        await browser.saveElement(await bp.homePageLink);
        await expect(await browser.checkElement(await bp.homePageLink)).toEqual(0);
    });

    it('Click on link and land on new page', async() =>{

        await bp.clickRejectCookies();

        await bp.clickHomePageLink();
        await expect(browser).toHaveTitle('Access Denied')

        await browser.saveFullPageScreen("afterClickingHomePageLink");
        await expect(await browser.checkFullPageScreen("afterClickingHomePageLink")).toEqual(0);
    });
});
