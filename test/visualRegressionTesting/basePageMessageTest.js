import exp from "constants";
import BasePage from "../../src/PageObjects/basePage.js";

const bp = new BasePage()
const baseURL = 'https://www.volvocars.com/intl/v/safety/a-million-more';

describe('Asserting heading message from base page', async() =>{
    it('Check heading message', async() =>{

        await bp.clickRejectCookies();
        await expect(browser).toHaveTitle('Volvo Cars - International');

        await browser.saveElement(await bp.heading);
        await expect(bp.heading).toHaveText("We couldn’t find the page you’re looking for.")
        await expect(await browser.checkElement(await bp.homePageLink)).toEqual(0);

    })
})