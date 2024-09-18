class ChromePage {
    get searchBar() { return $('//android.view.View[@resource-id="tsf"]/android.view.View[2]/android.widget.EditText'); }
    get firstResult() { return $('//android.view.View[@content-desc="Elfie https://www.elfie.co Elfie • Digital health • It pays to get better"]'); }
    get logo() { return $('//android.widget.Image[@text="Elfie icon"]'); }
    get hamburgerMenu() { return $('//android.webkit.WebView[@text="Elfie • Digital health • It pays to get better"]/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View'); }
    get closeMenu() { return $('button#close'); }
    get copyrightText() { return $('//android.widget.TextView[@text="Copyright © 2024 Elfie Pte. Ltd."]'); }

    async openChrome() {
        await browser.url('https://www.google.com/');
        await browser.pause(10000);
    }

    async searchKeyword(keyword) {
        await this.searchBar.waitForDisplayed();
        await this.searchBar.setValue(keyword);
        await this.searchBar.click();
        await driver.pressKeyCode(66);
    }

    async clickFirstResult() {
        await this.firstResult.waitForDisplayed();
        await this.firstResult.click();
    }

    async verifyLogoDisplayed() {
        await this.logo.waitForDisplayed({ timeout: 20000 });
        expect(await this.logo.isDisplayed()).toBe(true);
    }

    async captureScreenshot(filename) {
        await browser.saveScreenshot(`./screenshots/${filename}.png`);
    }

    async verifyHamburgerMenu() {
        await this.hamburgerMenu.click();
        await expect(this.closeMenu).toBeDisplayed();
    }

    async scrollToBottom() {
        await this.copyrightText.scrollIntoView();
        // await browser.execute(() => {
        //     window.scrollTo(0, document.body.scrollHeight);
        // });
    }

    async verifyCopyrightText() {
        const text = await this.copyrightText.getText();
        expect(text).toContain("Copyright 2023 Elfie Pte. Ltd.");
    }
}

module.exports = new ChromePage();
