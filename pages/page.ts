import { browser } from '@wdio/globals'
import { TIMEOUT } from '../data/properties.js';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * wait till a specific time for element to displayed
     * @param {WebdriverIO.Element} element element locator
     * @param {string} elementName element name
     */
    public async waitTillDisplayed(element: WebdriverIO.Element, elementName: string) {
        await element.waitForDisplayed({timeout: TIMEOUT.HIGH, timeoutMsg: `${elementName} is not displayed`});
    }

    /**
     * wait till a specific time for element to displayed and then click on the element
     * @param {WebdriverIO.Element} element element locator
     * @param {string} elementName element name
     */
    public async waitAndClick(element: WebdriverIO.Element, elementName: string) {
        await this.waitTillDisplayed(element, elementName);
        await element.click();
    }
    /**
    * Opens a sub page of the page
    * @param {string} URL path of the sub page (e.g. /path/to/page.html)
    */
    public open (URL: string) {
        return browser.url(URL);
    }
}
