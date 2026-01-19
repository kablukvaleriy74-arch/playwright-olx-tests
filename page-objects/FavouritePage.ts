import { Page, Locator } from "@playwright/test"

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

    async isPageTitleVisible(): Promise<boolean> {
        return await this.pageTitle.isVisible()
    }

    async doesPageTitleContain(text: string): Promise<boolean> {
        const titleText = await this.pageTitle.textContent()
        return titleText?.includes(text) ?? false
    }

    async isFavoritesUrlOpened(): Promise<boolean> {
        return this.page.url() === this.favoritesUrl
    }
}
