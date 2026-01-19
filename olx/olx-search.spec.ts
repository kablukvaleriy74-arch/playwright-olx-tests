import { test } from "@playwright/test"
import { SearchPage, KeyboardKey } from "../page-objects/SearchPage"

test.only("Search opens results page", async ({ page }) => {
    const searchPage = new SearchPage(page)

    await searchPage.open()
    await searchPage.setSearchText("квартира в центрі")
    await searchPage.typeSearchText()
    await searchPage.submitSearch(KeyboardKey.ENTER)

    const isOpened = await searchPage.isResultsPageOpened()
    }
)
