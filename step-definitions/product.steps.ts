import { When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.js';
import ProductPage from '../pages/product.page.js';
import { CREDTENTIAL} from '../data/properties.js';

When(/^I am logged into the Sauce Demo website$/, async () => {
    await LoginPage.open();
    await LoginPage.login(CREDTENTIAL.username, CREDTENTIAL.password);
});

Then(/^the items should be displayed in default sort order$/, async () => {
    await ProductPage.verifyDefaultSortOrder();
});

When(/^I change the sort order to "([^"]*)"$/, async (sortOrder: string) => {
    await ProductPage.changeSortOrder(sortOrder);
});

Then(/^the items should be sorted by price from high to low$/, async () => {
    await ProductPage.verifySortOrder();
});