export default class PageElements {

    async maximizeWindow(){
        await browser.maximizeWindow()
    }

    async getUrl(){
        await browser.getUrl()
    }

    async getTitle(){
        await browser.getTitle()
    }

    async element(){
        await browser.$(this.selector)
    }

    async elements(){
        await browser.$$(this.selector)
    }

    async text(){
        const ele = await this.element();
        return ele.getText();
    }

    async click(){
        try {
            await this.waitForClickable(timeout);
            const ele = await this.element();
            return await ele.click();
        }
        catch(err){
            return "element not clickable"
        }
    }

}

