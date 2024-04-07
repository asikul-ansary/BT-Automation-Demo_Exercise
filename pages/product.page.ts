import { $ } from '@wdio/globals'
import Page from './page.js';
import helper from '../utils/helper.js';
import logger from '../utils/logger.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
   /**
   * define selectors using getter methods
   */
    public get sortBtn () {
        return $('//select[@class="product_sort_container"]');
    }

    public get nameA2ZFilter () {
        return $('.product_sort_container > option:nth-child(1)');
    }

    public get priceHigh2LowFilter () {
        return $('.product_sort_container > option:nth-child(4)');
    }

    public get productNames () {
        return $$('.inventory_list > div > div:nth-child(2) > div > a');
    }

    public get productPrices () {
        return $$('.inventory_list > div > div:nth-child(2) > div:nth-child(2) > div');
    }

    /**
     * method to verify items are in default sort order
     */
    public async verifyDefaultSortOrder() {
        await this.waitTillDisplayed(await this.sortBtn, "Sort Icon Button");
        await expect(await (await this.nameA2ZFilter).isSelected()).toEqual(true);  
        let prodNames = await this.productNames.map(async ele => await ele.getText());
        logger.info(`All item names: ${prodNames}`);
        const sortedProdNames = [...prodNames].sort();
        logger.info(`All sorted item names: ${sortedProdNames}`);
        await expect(helper.checkIfSameArray(prodNames, sortedProdNames)).toEqual(true);
    }

    /**
     * method to change sort order type for the items
     * @param {string} sortType sort order type which is visible in the page
     */
    public async changeSortOrder(sortType: string) {
        await expect(await (await this.sortBtn).isDisplayed()).toEqual(true);
        await (await this.sortBtn).selectByVisibleText(sortType);
        await expect(await (await this.priceHigh2LowFilter).isSelected()).toEqual(true);
    }

    /**
     * method to verify items are in specific sort order
     */
    public async verifySortOrder() {
        const prodPrices = (await this.productPrices.map(async ele => await ele.getText()));
        logger.info(`All item prices: ${prodPrices}`);
        await expect(helper.checkIfArrayIsSortedInReverse(prodPrices)).toEqual(true);
    }

}

export default new ProductPage();
