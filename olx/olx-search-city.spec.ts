import { test, expect } from "@playwright/test";

test.only("Search with city filter", async ({ page }) => {
    await page.goto("https://www.olx.ua/uk");

    await page.getByPlaceholder("Що шукаєте?").fill("квартира");
    const locationButton = page.locator("form").locator("button").nth(1);

    await expect(locationButton).toBeVisible()
    await locationButton.click()
    const cityInput = page.locator("#location-input")
    await expect(cityInput).toBeVisible()
    await cityInput.fill("Харків")

    await expect(page).not.toHaveURL("https://www.olx.ua/uk")
});


