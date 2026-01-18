import { test } from "@playwright/test"
import { SearchPage } from "../page-objects/SearchPage"

test.only("Search opens results page", async ({ page }) => {
    const searchPage = new SearchPage(page)

    await searchPage.open()
    await searchPage.search()
    await searchPage.expectResultsPage()
})
