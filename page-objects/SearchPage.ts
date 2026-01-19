import { Page } from "@playwright/test"

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
        await this.page.goto(this.baseUrl)
    }

    async setSearchText(text: string) {
        this.searchText = text
    }

    async typeSearchText() {
        await this.page.click(this.searchInput)

        for (const char of this.searchText) {
            await this.page.keyboard.type(char)
        }
    }

    async submitSearch(key: KeyboardKey = KeyboardKey.ENTER) {
        await this.page.keyboard.press(key)
    }

    async isResultsPageOpened(): Promise<boolean> {
        await this.page.waitForTimeout(1000)
        return this.page.url() !== this.baseUrl
    }
}
