import { test } from "@playwright/test"
import { CategoryPage } from "../page-objects/CategoryPage"

test.only("Category dropdown opens and counts items", async ({ page }) => {
    const categoryPage = new CategoryPage(page)

    await categoryPage.open()

    const isCategoryVisible = await categoryPage.isCategoryButtonVisible()
    if (!isCategoryVisible) throw new Error("Category button is not visible")

    await categoryPage.openCategory()

    const isDropdownVisible = await categoryPage.isDropdownVisible()
    if (!isDropdownVisible) throw new Error("Dropdown did not appear")

    const itemCount = await categoryPage.countDropdownItems()
    console.log(`Dropdown contains ${itemCount} items`)
})
