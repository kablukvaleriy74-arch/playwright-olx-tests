import { Page } from "@playwright/test";
import { SearchPage } from "./SearchPage";

export class SearchCityPage {
  readonly page: Page;
  readonly searchPage: SearchPage;

  private cityName = "Харків";

  constructor(page: Page) {
    this.page = page;
    this.searchPage = new SearchPage(page);
  }

  private locationButton() {
    return this.page.locator("form button").nth(1);
  }

  private cityInput() {
    return this.page.locator("#location-input, input[name='location']");
  }

  async setCity(city: string) {
    this.cityName = city;
  }

  async searchWithCity() {
    await this.searchPage.typeSearchText("квартира");

    const locationBtn = this.locationButton();

    if (!(await locationBtn.isVisible())) {
      console.warn("Location button not found — skipping city selection");
      return;
    }

    await locationBtn.click();

    const cityInput = this.cityInput();

    if (!(await cityInput.isVisible())) {
      console.warn("City input not visible");
      return;
    }

    await cityInput.fill(this.cityName);
  }
}
