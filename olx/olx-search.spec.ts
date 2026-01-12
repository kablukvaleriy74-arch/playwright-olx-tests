import { test, expect } from "@playwright/test"

test("Search opens results page", async ({ page }) => {
    await page.goto("https://www.olx.ua/uk")

    await page.fill("#search", "квартира")
    await page.keyboard.press("Enter")

    await expect(page).not.toHaveURL("https://www.olx.ua/uk")
})
