export default class HomePage {

    async goToHomePage(url){
        await browser.maximizeWindow()
        await browser.url(url)
    }

    async closeWindow(error){
        if(error){
            await browser.takeScreenshot()
            await browser.closeWindow()
        }
    }
}
