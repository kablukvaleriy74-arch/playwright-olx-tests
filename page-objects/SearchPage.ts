import { Page, expect } from "@playwright/test"

export enum KeyboardKey {
    ENTER = "Enter",
}

export class SearchPage {
    readonly page: Page

    private readonly baseUrl = "https://www.olx.ua/uk"
    private readonly searchInput = "#search"

    private searchText = "квартира"

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto(this.baseUrl);
    }

    async setSearchText(text: string) {
        this.searchText = text
    }

    async search(key: KeyboardKey = KeyboardKey.ENTER) {
        await this.page.fill(this.searchInput, this.searchText)
        await this.page.keyboard.press(key)
    }

    async expectResultsPage() {
        await expect(this.page).not.toHaveURL(this.baseUrl)
    }
}
