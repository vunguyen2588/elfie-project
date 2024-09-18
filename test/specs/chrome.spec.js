const ChromePage = require('../pageobjects/chrome.page');
const searchData = require('../../data/searchData.json');

describe('Chrome App Automation', () => {

    it('should perform an end-to-end flow', async () => {
        
        // Open Chrome
        await ChromePage.openChrome();

        // Navigate to Google and search
        await ChromePage.searchKeyword(searchData.searchKeyword);

        // Click first result and verify logo
        await ChromePage.clickFirstResult();
        await ChromePage.verifyLogoDisplayed();
        await ChromePage.captureScreenshot('logo_displayed');

        // Verify Hamburger menu
        // await ChromePage.verifyHamburgerMenu();
        // await ChromePage.captureScreenshot('hamburger_menu');

        // Scroll to bottom and verify copyright
        await ChromePage.scrollToBottom();
        await ChromePage.verifyCopyrightText();
        await ChromePage.captureScreenshot('copyright_text');
    });
});
