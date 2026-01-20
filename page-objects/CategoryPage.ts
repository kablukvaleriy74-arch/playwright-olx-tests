import { Page, Locator } from "@playwright/test"

export class CategoryPage {
    readonly page: Page

    private readonly baseUrl = "https://www.olx.ua/uk"

    private readonly categoryButton: Locator
    private readonly subcategoryButton: Locator
    private readonly dropdown: Locator

    constructor(page: Page) {
        this.page = page
        
        this.categoryButton = page.locator('header button[aria-haspopup="true"]').first()

        this.subcategoryButton = page.locator('ul > li').first()

        this.dropdown = page.locator('ul').first()
    }

    async open() {
        await this.page.goto(this.baseUrl)
        await this.page.waitForLoadState("domcontentloaded")
    }

    async openCategory() {
        await this.categoryButton.waitFor({ state: "visible", timeout: 15000 })
        await this.categoryButton.click()

        await this.subcategoryButton.waitFor({ state: "visible", timeout: 10000 })
        await this.subcategoryButton.click()
    }

    async countDropdownItems(): Promise<number> {
        return await this.dropdown.locator('li').count()
    }

    async isDropdownVisible(): Promise<boolean> {
        return await this.dropdown.isVisible()
    }

    async isCategoryButtonVisible(): Promise<boolean> {
        return await this.categoryButton.isVisible()
    }
}
