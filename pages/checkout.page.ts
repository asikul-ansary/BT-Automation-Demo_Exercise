import { $ } from '@wdio/globals'
import Page from './page.js';
import { CUSTOMER_INFO } from '../data/properties.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
   /**
   * define selectors using getter methods
   */
    public get title () {
        return $('//span[@class="title"]');
    }

    public get firstName () {
        return $('#first-name');
    }
    
    public get lastName () {
        return $('#last-name');
    }

    public get zipCode () {
        return $('#postal-code');
    }

    public get continueBtn () {
        return $('#continue');
    }

    public get totalPriceTag () {
        return $('.summary_total_label');
    }

    public get placeOrderBtn () {
        return $('#finish');
    }

    public get backToHomeBtn () {
        return $('#back-to-products');
    }

    public get orderConfirm () {
        return $('.complete-header');
    }

    public get orderConfirmText () {
        return $('.complete-text');
    }

    /**
     * method to verify input field details before placing the order
     */
    public async verifyInputFieldValidations() {
        await this.waitTillDisplayed(await this.firstName, "First Name field");
        await expect(await (await this.title).getText()).toEqual("Checkout: Your Information");
        await (await this.firstName).addValue(CUSTOMER_INFO.firstName);
        await (await this.lastName).addValue(CUSTOMER_INFO.lastName);
        await (await this.zipCode).addValue(CUSTOMER_INFO.zipCode);
    }

    /**
     * method to navigate to overview page before placing the order
     */
    public async goToOverview() {
        await this.waitAndClick(await this.continueBtn, "Navigate to overview button");
    }

    /**
     * method to verify total price before placing the order
     */
    public async verifyTotalPrice() {
        await this.waitTillDisplayed(await this.totalPriceTag, "Total Price Tag");
        await expect(await (await this.title).getText()).toEqual("Checkout: Overview");
        await expect(await (await this.totalPriceTag).isDisplayed()).toEqual(true);

    }

    /**
     * method to place the order
     */
    public async placeOrder() {
        await this.waitAndClick(await this.placeOrderBtn, "Place order button");
    }

    /**
     * method to verify order confirmation after placing the order
     */
    public async verifyConfirmationMessage() {  
        await this.waitTillDisplayed(await this.orderConfirm, "Order placed confirm");
        await expect(await (await this.title).getText()).toEqual("Checkout: Complete!");
        await expect(await (await this.orderConfirmText).getText()).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    }

    /**
     * method to navigate to home page
     */
    public async navigateToHomePage() {
        await this.waitAndClick(await this.backToHomeBtn, "Back to home button");
    }
}

export default new CheckoutPage();
