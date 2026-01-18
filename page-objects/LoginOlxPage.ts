import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page

    private readonly baseUrl = "https://www.olx.ua/uk"

    private readonly profileButton: Locator
    private readonly usernameInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator

    private username = "some username"
    private password = "password"

    constructor(page: Page) {
        this.page = page

        this.profileButton = page.getByText("Ваш профіль")
        this.usernameInput = page.locator("#username")
        this.passwordInput = page.locator("#password")
        this.loginButton = page.locator("#Login")
    }

    async open() {
        await this.page.goto(this.baseUrl);
    }

    async setUsername(username: string) {
        this.username = username
    }

    async setPassword(password: string) {
        this.password = password
    }

    async login() {
        await this.profileButton.click()
        await this.usernameInput.fill(this.username)
        await this.passwordInput.fill(this.password)
    }

    async expectLoginButtonDisabled() {
        await expect(this.loginButton).toBeDisabled()
    }
}
