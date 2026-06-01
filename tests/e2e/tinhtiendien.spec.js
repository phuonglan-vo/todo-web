import { test, expect } from '@playwright/test';

//Test plan
test.describe("Kiểm thử chức năng tính tiền điện", () => {
    //Mở trang chủ
    test.beforeEach(async ({ page }) => {
        await page.goto("/tinh-tien-dien.html");
    });
    //Test case 1: chưa nhập gì cả, vùng thông báo phải hiển thị chữ "Vui lòng nhập số kwh"
    test("TC001 - Hiển thị thông báo lỗi khi bỏ trống số kwh", async ({ page }) => {
        //Thao tác click vào nút có id "calculate-button"
        await page.click("#calculate-btn");
        //Lấy phần tử vùng thông báo id calculation-message
        const loginMessage = page.locator('#calculation-message');
        //Mong đợi kết quả trong vùng thông báo phải là "Vui lòng nhập số kwh"
        await expect(loginMessage).toHaveText("Vui lòng nhập số kwh");  
    });
    //Test case 2: nhập số kwh là 0, vùng thông báo phải hiển thị "Số tiền phải trả là 0 VNĐ"
    test("TC002 - Hiển thị thông báo lỗi khi nhập số kwh là 0", async ({ page }) => {
        await page.fill("#kwh-input", "0");
        await page.click("#calculate-btn");
        const loginMessage = page.locator('#calculation-message');
        await expect(loginMessage).toHaveText("Số tiền điện phải trả là 0 VNĐ");
    });
});
