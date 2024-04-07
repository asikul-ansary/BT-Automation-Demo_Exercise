import { $ } from "@wdio/globals";
import Page from "./page.js";
import logger from "../utils/logger.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
  public itemList: string[] = [];
  /**
   * define selectors using getter methods
   */
  private get checkoutBtn() {
    return $("#checkout");
  }

  private get cart_link() {
    return $(".shopping_cart_link");
  }

  private get cart_items() {
    return $$(".cart_item > div:nth-child(2) > a > div");
  }

  private get sortBtn() {
    return $('//select[@class="product_sort_container"]');
  }

  private get priceHigh2LowFilter() {
    return $(".product_sort_container > option:nth-child(4)");
  }

  private get priceLow2HighFilter() {
    return $(".product_sort_container > option:nth-child(3)");
  }

  private get firstItem() {
    return $(
      ".inventory_list > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button"
    );
  }

  private get cartContainer() {
    return $('#cart_contents_container');
  }

  /**
   * method to add random specific number of items to cart
   * @param {number} count the number of item wants to add to cart
   */
  async addRandomItemsToCart(count: number) {
    let itemCount = 1;
    while (itemCount <= count) {
      const prodName = await (
        await $(
          `.inventory_list > div:nth-child(${itemCount}) > div:nth-child(2) > div > a > div`
        )
      ).getText();
      this.itemList.push(prodName);
      await (
        await $(
          `.inventory_list > div:nth-child(${itemCount}) > div:nth-child(2) > div:nth-child(2) > button`
        )
      ).click();
      itemCount++;
    }
    logger.info(`added items in cart: ${this.itemList}`);
  }

  /**
   * method to check if all the items present in cart
   * @param {string[]} currCartItems current items in cart
   * @returns {boolean} return true if all items present in cart
   */
  checkIfAllItemsPresentInCart(currCartItems: string[]) {
    for (let item of this.itemList) {
      if (!currCartItems.includes(item)) {
        return false;
      }
    }
    return true;
  }

  /**
   * method to check if all the items present in cart
   */
  async verifyItemsInCart() {
    logger.info(`previously added items in cart: ${this.itemList}`);
    await this.waitAndClick(await this.cart_link, "Cart Icon Link");
    await this.waitTillDisplayed(await this.cartContainer, "Cart Container");
    const currentCartItems = await this.cart_items.map(
      async (ele) => await ele.getText()
    );
    logger.info(`current items in cart: ${currentCartItems}`);
    await expect(this.checkIfAllItemsPresentInCart(currentCartItems)).toEqual(
      true
    );
  }

  /**
   * add one highest and one lowest price item in cart
   */
  async addHighestAndLowestItemsToCart() {
    await (await this.sortBtn).selectByVisibleText("Price (high to low)");
    await expect(await (await this.priceHigh2LowFilter).isSelected()).toEqual(
      true
    );
    await this.waitAndClick(await this.firstItem, "First Item");
    await (await this.sortBtn).selectByVisibleText("Price (low to high)");
    await expect(await (await this.priceLow2HighFilter).isSelected()).toEqual(
      true
    );
    await this.waitAndClick(await this.firstItem, "First Item");
  }

  /**
   * method to navigate to checkout page
   */
  async goToCheckout() {
    await this.waitAndClick(await this.cart_link, "Cart Icon Link");
    await this.waitAndClick(await this.checkoutBtn, "Checkout Button");
  }
}

export default new CartPage();
