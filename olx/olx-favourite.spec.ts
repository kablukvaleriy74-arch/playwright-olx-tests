import { test } from "@playwright/test";
import { FavoritesPage } from "../page-objects/FavouritePage";

test.only("Favorites page opens", async ({ page }) => {
  const favoritesPage = new FavoritesPage(page);

  await favoritesPage.open();
  await favoritesPage.openFavorites();

  const urlOpened = await favoritesPage.isFavoritesUrlOpened();
  console.log("Favorites URL opened:", urlOpened);
});

