import { Page, Locator } from "@playwright/test"

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
        await this.page.goto(this.baseUrl)
    }

    async openLoginForm() {
        await this.profileButton.click()
    }

    async setUsername(username: string) {
        this.username = username
    }

    async setPassword(password: string) {
        this.password = password
    }

    async typeUsernameSlowly() {
        await this.usernameInput.click()
        for (const char of this.username) {
            await this.page.keyboard.type(char)
        }
    }

    async typePasswordSlowly() {
        await this.passwordInput.click()
        for (const char of this.password) {
            await this.page.keyboard.type(char)
        }
    }

    async isLoginButtonDisabled(): Promise<boolean> {
        return await this.loginButton.isDisabled()
    }
}

