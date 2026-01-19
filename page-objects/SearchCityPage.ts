import { Page, expect } from "@playwright/test"
import { SearchPage } from "./SearchPage"

export class SearchCityPage {
    readonly page: Page
    readonly searchPage: SearchPage

    private readonly locationButton;
    private readonly cityInput;

    private cityName = "Харків"

    constructor(page: Page) {
        this.page = page
        this.searchPage = new SearchPage(page)

        this.locationButton = page.locator('form button').nth(1)

        this.cityInput = page.locator("#location-input")
    }

    async setCity(city: string) {
        this.cityName = city
    }

    async searchWithCity() {
        await this.searchPage.typeSearchText()

        await this.locationButton.click()

        await this.cityInput.fill(this.cityName)
    }
}
