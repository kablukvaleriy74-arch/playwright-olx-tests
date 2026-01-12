import { expect, Locator, Page } from "@playwright/test"

export class PaymentPage {
    readonly page: Page
    readonly payeeSelectbox: Locator
    readonly payeeDetailButton: Locator
    readonly peyeeDetail: Locator
    readonly accountSelectbox: Locator
    readonly amountInput: Locator
    readonly dateInput: Locator
    readonly descriptionInput: Locator
    readonly submitPaymentButton: Locator
    readonly message: Locator

        constructor(page:Page) {
            this.page = page
            this.payeeSelectbox = page.locator('#sp_payee')
            this.payeeDetailButton = page.locator('#sp_get_payee_details')
            this.peyeeDetail = page.locator('#sp_payee_details')
            this.accountSelectbox = page.locator('#sp_account')
            this.amountInput = page.locator('#sp_amount')
            this.dateInput = page.locator('#sp_date')
            this.descriptionInput = page.locator('#sp_description')
            this.submitPaymentButton = page.locator('#pay_saved_payees')
            this.message = page.locator('#alert_content > span')
        }

        async createPayment() {
            await this.payeeSelectbox.selectOption('apple')
            await this.payeeDetailButton.click()
            await expect(this.peyeeDetail).toBeVisible()
            await this.accountSelectbox.selectOption('6')
            await this.amountInput.fill('5000')
            await this.dateInput.fill('2026-01-06')
            await this.descriptionInput.fill('Some message')
            await this.submitPaymentButton.click()
        }

        async assertSuccessMessage() {
            await expect(this.message).toBeVisible()
            await expect(this.message).toContainText('The payment was successfully submitted')
        }
}