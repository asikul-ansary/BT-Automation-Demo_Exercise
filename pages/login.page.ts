import { $ } from "@wdio/globals";
import Page from "./page.js";
import { TIMEOUT, URL } from "../data/properties.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $("#user-name");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $("#login-button");
  }

  public get errorBtn() {
    return $('//button[@class="error-button"]');
  }

  public get errorMsg() {
    return $("//h3");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await expect(await (await this.inputUsername).isDisplayed()).toEqual(true);
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * method to verify user is in login page
   */
  public async verifyLoginPage() {
    await this.inputUsername.waitForDisplayed({
      timeout: TIMEOUT.HIGH,
      timeoutMsg: "Username is not displayed at login page",
    });
    await expect(await this.inputUsername.isDisplayed()).toEqual(true);
  }

  /**
   * method to verify user failed to login
   */
  public async verifyFailedLogin() {
    await this.errorBtn.waitForDisplayed({
      timeout: TIMEOUT.MEDIUM,
      timeoutMsg: "Error Button is not displayed at login page",
    });
    await expect(await this.errorBtn.isDisplayed()).toEqual(true);
    await expect(await (await this.errorMsg).getText()).toEqual(
      "Epic sadface: Sorry, this user has been locked out."
    );
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open(URL);
  }
}

export default new LoginPage();
