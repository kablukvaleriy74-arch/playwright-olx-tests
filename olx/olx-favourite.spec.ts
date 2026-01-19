import { test } from "@playwright/test"
import { FavoritesPage } from "../page-objects/FavouritePage"

test.only("Open the favourite items", async ({ page }) => {
    const favoritesPage = new FavoritesPage(page)

    await favoritesPage.open()
    await favoritesPage.openFavorites()

    const isTitleVisible = await favoritesPage.isPageTitleVisible()
    const isCorrectTitle = await favoritesPage.doesPageTitleContain("Обрані результати пошуку")
    const isCorrectUrl = await favoritesPage.isFavoritesUrlOpened()

})
