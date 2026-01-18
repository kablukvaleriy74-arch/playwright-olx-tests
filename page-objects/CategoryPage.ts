import { Page, expect, Locator } from "@playwright/test"

export class CategoryPage {
    readonly page: Page

    private readonly baseUrl = "https://www.olx.ua/uk";

    private readonly categoryButton: Locator
    private readonly subcategoryButton: Locator
    private readonly dropdown: Locator

    constructor(page: Page) {
        this.page = page

        this.categoryButton = page.locator(".css-rbcfn3").first()

        this.subcategoryButton = page.locator(".css-t0lbh8").first()

        this.dropdown = page.locator(".css-ydag0f")
    }

    async open() {
        await this.page.goto(this.baseUrl)
    }

    async openCategory() {
        await this.categoryButton.click()
        await this.subcategoryButton.click()
    }

    async expectDropdownVisible() {
        await expect(this.dropdown).toBeVisible()
    }
}
