import PageElements from "./PageElements.js";

// const pe = new PageElements();

const selectors = {
    acceptCookies : "//div[@class='banner-actions-container']//button[text()='Accept Cookies']",
    cookiesSettings : "//div[@class='banner-actions-container']//button[text()='Cookies Setting']",
    rejectCookies : "//div[@class='banner-actions-container']//button[text()='Reject All']",
    heading : "//h2[text()='We couldn’t find the page you’re looking for.']",
    homePageLink : "//a[@href='/intl/v']"
}

export default class BasePage extends PageElements {

    get acceptButton() {
        return $(selectors.acceptCookies)
    }
    async clickAcceptCookies(){
        (await this.acceptButton).click()
    }

    get rejectButton() {
        return $(selectors.rejectCookies)
    }
    async clickRejectCookies(){
        (await this.rejectButton).click()
    }

    get heading(){
        return $(selectors.heading)
    }

    get homePageLink(){
        return $(selectors.homePageLink)
    }
    async clickHomePageLink(){
        await this.homePageLink.click()
    }

}
