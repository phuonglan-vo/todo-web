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
        const tinhtienMessage = page.locator('#calculation-message');
        //Mong đợi kết quả trong vùng thông báo phải là "Vui lòng nhập số kwh"
        await expect(tinhtienMessage).toHaveText("Vui lòng nhập số kwh");  
    });
    //Test case 2: nhập số kwh là 0, vùng thông báo phải hiển thị "Số tiền phải trả là 0 VNĐ"
    test("TC002 - Hiển thị thông báo lỗi khi nhập số kwh là 0", async ({ page }) => {
        await page.fill("#kwh-input", "0");
        await page.click("#calculate-btn");
        const tinhtienMessage = page.locator('#calculation-message');
        await expect(tinhtienMessage).toHaveText("Số tiền điện phải trả là 0 VNĐ");
    });
    //Test case 3: số tiền điện phải trả dưới 20.000 VNĐ, vùng thông báo phải hiển thị màu đỏ
    test("TC003 - Hiển thị thông báo màu đỏ khi số tiền điện phải trả dưới 20.000 VNĐ", async ({ page }) => {
        await page.fill("#kwh-input", "10");
        await page.click("#calculate-btn");
        const tinhtienMessage = page.locator('#calculation-message span');
        await expect(tinhtienMessage).toHaveText("Số tiền điện phải trả là 18000 VNĐ");
        await expect(tinhtienMessage).toHaveCSS("color", "rgb(255, 0, 0)"); //Màu đỏ
    });
});
