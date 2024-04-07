import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pages/login.page.js';
import HomePage from '../pages/home.page.js';


Given(/^I open saucedemo website$/, async () => {
    await LoginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should login successfully and land on home page$/, async () => {
    await HomePage.verifyHomePage();
});

Then(/^I should be able to logout$/, async () => {
    await HomePage.logout();
    await LoginPage.verifyLoginPage();
});

Then(/^I should see an error message indicating login failure$/, async () => {
    await LoginPage.verifyFailedLogin();
});