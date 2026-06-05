import { test, expect } from "@playwright/test";

test("TC-E2E-01: nhập URL và hiển thị danh sách UL LI", async ({ page }) => {
    await page.goto("/danh-sach-users.html");

    await page.locator('#api-url');
    await page.click('#fetch-button');

    await expect(page.locator('#result ul')).toBeVisible();
    await expect(page.locator('#result li')).toHaveCount(10);
});
test("TC-E2E-02: kiểm tra dữ liệu đúng", async({page}) => {
    await page.goto("/danh-sach-users.html");

    await page.locator('#api-url');
    await page.click('#fetch-button');

    const result = page.locator('#result');
    await expect(result).toContainText('Ervin Howell');
    await expect(result).toContainText('Kurtis Weissnat');
    await expect(result).toContainText('Glenna Reichert');
});