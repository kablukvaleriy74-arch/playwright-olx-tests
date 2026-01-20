import { Page, Locator } from "@playwright/test";

export class FavoritesPage {
  readonly page: Page;

  private readonly baseUrl = "https://www.olx.ua/uk";
  private readonly favoritesUrlPart = "/favorites";

  constructor(page: Page) {
    this.page = page;
  }

  private favoritesButton(): Locator {
    return this.page.locator('a[href*="favorites"]');
  }

  private pageTitle(): Locator {
    return this.page.locator("h1, h2").first();
  }

  async open() {
    await this.page.goto(this.baseUrl);
  }

  async openFavorites() {
    const favBtn = this.favoritesButton();

    if (!(await favBtn.isVisible())) {
      console.warn("Favorites button not visible — possible CAPTCHA or not logged in");
      return;
    }

    await favBtn.click();
  }

  async isPageTitleVisible(): Promise<boolean> {
    const title = this.pageTitle();

    if (!(await title.isVisible())) {
      return false;
    }

    return true;
  }

  async doesPageTitleContain(text: string): Promise<boolean> {
    const title = this.pageTitle();

    if (!(await title.isVisible())) {
      return false;
    }

    const titleText = await title.textContent();
    return titleText?.toLowerCase().includes(text.toLowerCase()) ?? false;
  }

  async isFavoritesUrlOpened(): Promise<boolean> {
    return this.page.url().includes(this.favoritesUrlPart);
  }
}
