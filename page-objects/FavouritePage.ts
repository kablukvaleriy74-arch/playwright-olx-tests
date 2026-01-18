import { Page, expect, Locator } from "@playwright/test"

export class FavoritesPage {
    readonly page: Page

    private readonly baseUrl = "https://www.olx.ua/uk"
    private readonly favoritesUrl = "https://www.olx.ua/uk/favorites/search/"

    private readonly favoritesButton: Locator
    private readonly pageTitle: Locator

    constructor(page: Page) {
        this.page = page

        this.favoritesButton = page.locator(".css-oo5g20")

        this.pageTitle = page.locator("h2")
    }

    async open() {
        await this.page.goto(this.baseUrl)
    }

    async openFavorites() {
        await this.favoritesButton.click()
    }

    async expectPageTitleVisible() {
        await expect(this.pageTitle).toBeVisible()
    }

    async expectPageTitleContains(text: string) {
        await expect(this.pageTitle).toContainText(text)
    }

    async expectFavoritesUrl() {
        await expect(this.page).toHaveURL(this.favoritesUrl)
    }
}
