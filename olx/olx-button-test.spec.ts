import { test } from "@playwright/test";
import { CategoryPage } from "../page-objects/CategoryPage";

test.only("Category dropdown opens", async ({ page }) => {
    const categoryPage = new CategoryPage(page);

    await categoryPage.open();
    await categoryPage.openCategory();
    await categoryPage.expectDropdownVisible();
});
