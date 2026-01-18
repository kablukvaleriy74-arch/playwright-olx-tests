import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginOlxPage"

test.only("Login to account", async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.open()
    await loginPage.login()
    await loginPage.expectLoginButtonDisabled()
})
