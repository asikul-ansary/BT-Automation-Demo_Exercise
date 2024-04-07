import { When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pages/home.page.js';
import CartPage from '../pages/cart.page.js';
import CheckoutPage from '../pages/checkout.page.js';
import LoginPage from '../pages/login.page.js';
import { CREDTENTIAL } from '../data/properties.js';

When(/^I add random (\d+) items to the cart$/, async (count: number) => {
    await CartPage.addRandomItemsToCart(count);
});

When(/^I logout$/, async () => {
    await HomePage.logout();
});

When(/^I login again$/, async () => {
    await LoginPage.login(CREDTENTIAL.username ,CREDTENTIAL.password);
});

Then(/^the previously added items should be in the cart$/, async () => {
    await CartPage.verifyItemsInCart();
});

When(/^I add 2 items to the cart \(one highest and one lowest\)$/, async () => {
    await CartPage.addHighestAndLowestItemsToCart();
});

When(/^I proceed to checkout information page$/, async () => {
    await CartPage.goToCheckout();
});

Then(/^input field validations should work for all form fields$/, async () => {
    await CheckoutPage.verifyInputFieldValidations();
});

When(/^I proceed to checkout overview page$/, async () => {
    await CheckoutPage.goToOverview();
});

Then(/^I should see the correct total price$/, async () => {
    await CheckoutPage.verifyTotalPrice();
});

Then(/^I should be able to place the order successfully$/, async () => {
    await CheckoutPage.placeOrder();
});

Then(/^I should see a confirmation message$/, async () => {
    await CheckoutPage.verifyConfirmationMessage();
});

Then(/^I should be redirected to the home page$/, async () => {
    await CheckoutPage.navigateToHomePage();
    await HomePage.verifyHomePage();
});