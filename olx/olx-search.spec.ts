import { test } from "@playwright/test"
import { SearchPage, KeyboardKey } from "../page-objects/SearchPage"

test.only("Search opens results page", async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.open();
  await searchPage.typeSearchText("квартира");
  await searchPage.submitSearch();

  const isOpened = await searchPage.isResultsPageOpened();
  console.log("Results page opened:", isOpened);
});

