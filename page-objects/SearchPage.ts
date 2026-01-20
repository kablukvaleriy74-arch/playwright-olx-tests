import { Page } from "@playwright/test";

export enum KeyboardKey {
  ENTER = "Enter",
}

export class SearchPage {
  readonly page: Page;

  private readonly baseUrl = "https://www.olx.ua/uk";

  constructor(page: Page) {
    this.page = page;
  }

  private searchInput() {
    return this.page.locator('input[name="q"], input[type="search"]');
  }

  async open() {
    await this.page.goto(this.baseUrl, { waitUntil: "domcontentloaded" });
  }

  async typeSearchText(text: string) {
    const input = this.searchInput();

    try {
      await input.first().waitFor({ state: "visible", timeout: 10_000 });
    } catch {
      console.warn("Search input not found — possible CAPTCHA or page change");
      return;
    }

    await input.first().fill(text);
  }

  async submitSearch(key: KeyboardKey = KeyboardKey.ENTER) {
    await this.page.keyboard.press(key);
  }

  async isResultsPageOpened(): Promise<boolean> {
    try {
      await this.page.waitForURL(
        url => url.toString() !== this.baseUrl,
        { timeout: 15_000 }
      );
      return true;
    } catch {
      console.warn("URL did not change — possible CAPTCHA");
      return false;
    }
  }
}

