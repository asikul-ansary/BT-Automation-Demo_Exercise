import { $ } from '@wdio/globals'
import Page from './page.js';
import { TIMEOUT } from '../data/properties.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
   /**
   * define selectors using getter methods
   */
    public get product () {
        return $('//span[@class="title"]');
    }

    public get menuBtn () {
        return $('#react-burger-menu-btn');
    }
    
    public get logoutBtn () {
        return $('#logout_sidebar_link');
    }

    /**
     * method to verify user is in home page
     */
    public async verifyHomePage () {
        await this.waitTillDisplayed(await this.product, "Product Title");
        await expect(await this.product.isDisplayed()).toEqual(true);
    }

    /**
     * method to logout from the website
     */
    public async logout() {
        await expect(await (await this.menuBtn).isDisplayed()).toEqual(true);
        await this.menuBtn.click();
        await this.waitAndClick(await this.logoutBtn, "Logout Button in Side Bar");
    }
}

export default new HomePage();
