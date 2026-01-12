import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { FeedbackPage } from "../../page-objects/FeedbackPage"

test.describe("Feedback Form", () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({ page }) => {
       // await page.goto("http://zero.webappsecurity.com/index.html")
       // await page.click("#feedback")
       homePage = new HomePage(page)
       feedbackPage = new FeedbackPage(page)

       await homePage.visit()
       await homePage.clickOnFeedbackLink()
    })

    // Reset feedback form 
    test("Reset feedback form", async ({ page }) => {
       await feedbackPage.fillForm("name", "email@mail.com", "subject", "my awesome message")
       await feedbackPage.resetForm()
       await feedbackPage.assertReset()
    })

    // Submit feedback form 
    test("Submit feedback form", async ({ page }) => {
        //await page.fill("#name", "some name")
        //await page.fill("#email", "some email@email.com")
        //await page.fill("#subject", "some subject")
        //await page.fill("#comment", "some nice comment about the application")
        //await page.click("input[type='submit']")
        //await page.waitForSelector("#feedback-title")
        await feedbackPage.fillForm("name", "email@mail.com", "subject", "my awesome message")
        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()
    })
})