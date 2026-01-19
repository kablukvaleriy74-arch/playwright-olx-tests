import { test } from "@playwright/test"
import { CategoryPage } from "../page-objects/CategoryPage"

test("Category dropdown opens", async ({ page }) => {
    const categoryPage = new CategoryPage(page)

    await categoryPage.open()

    const isCategoryButtonVisible = await categoryPage.isCategoryButtonVisible()

    await categoryPage.openCategory()

    const isDropdownVisible = await categoryPage.isDropdownVisible()
    }
)
