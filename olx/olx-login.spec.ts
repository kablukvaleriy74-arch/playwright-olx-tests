import { test } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginOlxPage"

test.only("Login to account", async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.open()
    await loginPage.openLoginForm()

    await loginPage.setUsername("invalid_user")
    await loginPage.setPassword("invalid_password")

    await loginPage.typeUsernameSlowly()
    await loginPage.typePasswordSlowly()

    const isDisabled = await loginPage.isLoginButtonDisabled()
    }
)
