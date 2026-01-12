import { test, expect } from "@playwright/test"

test("Category dropdown opens", async ({ page }) => {
    await page.goto("https://www.olx.ua/uk")

    await page.click(".css-rbcfn3")
    await page.click(".css-t0lbh8")

    const dropdown = page.locator(".css-ydag0f")
    await expect(dropdown).toBeVisible()
})