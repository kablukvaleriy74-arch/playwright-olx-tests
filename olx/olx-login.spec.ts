import { test, expect } from "@playwright/test"

test("Login to account", async ({ page }) => {
    await page.goto("https://www.olx.ua/uk")
    await page.click("text=Ваш профіль")

    await page.fill("#username", "some username")
    await page.fill("#password", "password")

    const loginButton = page.locator("#Login")
    await expect(loginButton).toBeDisabled()
})