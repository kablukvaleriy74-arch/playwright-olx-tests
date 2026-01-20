import { test } from "@playwright/test";
import { SearchCityPage } from "../page-objects/SearchCityPage";

test.only("Search with city filter", async ({ page }) => {
  const searchCityPage = new SearchCityPage(page);

  await searchCityPage.searchPage.open();
  await searchCityPage.searchWithCity();
});
