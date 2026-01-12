import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { PaymentPage } from "../../page-objects/PaymentPage"
import { Navbar } from "../../page-objects/Navbar"

test.describe("New Payment", () => {
     let homePage: HomePage
    let loginPage: LoginPage
    let paymentPage: PaymentPage
    let navbar: Navbar

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
       loginPage = new LoginPage(page)
       paymentPage = new PaymentPage(page)
       navbar = new Navbar(page)

       homePage.visit()
       homePage.clickOnSignIn()
       loginPage.login("username", "password")
    })

    test("Should send new payment", async ({ page }) => {
    //await page.click("#pay_bills_tab")
    navbar.clickOnTab("Pay Bills")
    //await page.selectOption("#sp_payee", "apple")
    //await page.click("#sp_get_payee_details")
   // await page.waitForSelector("#sp_payee_details")
    //await page.selectOption("#sp_account", "6")
    //await page.fill("#sp_amount", "5000")
    //await page.fill("#sp_date", "2026-01-06")
    //await page.fill("#sp_description", "some random message")
    //await page.click("#pay_saved_payees")
    await paymentPage.createPayment()
    await paymentPage.assertSuccessMessage()

   // const message = await page.locator("#alert_content > span")
   // await expect(message).toBeVisible()
   // await expect(message).toContainText("The payment was successfully submitted")
    })
})