import { test, expect } from "@playwright/test"

test("Open the favourite items", async ({ page }) => {
    await page.goto("https://www.olx.ua/uk")
    await page.click(".css-oo5g20")

    const pageTitle = page.locator("h2")
    await expect(pageTitle).toBeVisible()
    await expect(pageTitle).toContainText("Обрані результати пошуку")

    await expect(page).toHaveURL("https://www.olx.ua/uk/favorites/search/")
})