import { test } from "@playwright/test"
import { SearchPage } from "../page-objects/SearchPage"
import { SearchCityPage } from "../page-objects/SearchCityPage"

test.only("Search with city filter", async ({ page }) => {
    const searchPage = new SearchPage(page)
    const searchCityPage = new SearchCityPage(page)

    await searchPage.open()
    await searchCityPage.searchWithCity()
    await searchPage.isResultsPageOpened()
})


