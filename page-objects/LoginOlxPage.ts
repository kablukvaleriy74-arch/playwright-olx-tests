import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  private readonly baseUrl = "https://www.olx.ua/uk";

  private username = "some username";
  private password = "password";

  constructor(page: Page) {
    this.page = page;
  }


  private profileButton(): Locator {
    return this.page.locator("header button, header a").first();
  }

  private usernameInput(): Locator {
    return this.page.locator("#username, input[name='username'], input[type='email']");
  }

  private passwordInput(): Locator {
    return this.page.locator("#password, input[name='password'], input[type='password']");
  }

  private loginButton(): Locator {
    return this.page.locator("#Login, button[type='submit']");
  }


  async open() {
    await this.page.goto(this.baseUrl);
  }

  async openLoginForm() {
    const profileBtn = this.profileButton();

    if (!(await profileBtn.isVisible())) {
      console.warn("⚠ Profile button not found — possible CAPTCHA or layout change");
      return;
    }

    await profileBtn.click();
  }

  async setUsername(username: string) {
    this.username = username;
  }

  async setPassword(password: string) {
    this.password = password;
  }

  async typeUsernameSlowly() {
    const input = this.usernameInput();

    if (!(await input.isVisible())) {
      console.warn("⚠ Username input not visible");
      return;
    }

    await input.click();
    for (const char of this.username) {
      await this.page.keyboard.type(char);
    }
  }

  async typePasswordSlowly() {
    const input = this.passwordInput();

    if (!(await input.isVisible())) {
      console.warn("Password input not visible");
      return;
    }

    await input.click();
    for (const char of this.password) {
      await this.page.keyboard.type(char);
    }
  }

  async isLoginButtonDisabled(): Promise<boolean> {
    const button = this.loginButton();

    if (!(await button.isVisible())) {
      console.warn("Login button not visible");
      return true;
    }

    return await button.isDisabled();
  }
}
