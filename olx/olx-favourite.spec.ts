import { test } from "@playwright/test";
import { FavoritesPage } from "../page-objects/FavouritePage";

test.only("Open the favourite items", async ({ page }) => {
    const favoritesPage = new FavoritesPage(page);

    await favoritesPage.open();
    await favoritesPage.openFavorites();
    await favoritesPage.expectPageTitleVisible();
    await favoritesPage.expectPageTitleContains("Обрані результати пошуку");
    await favoritesPage.expectFavoritesUrl();
});
