import {test, expect} from "@playwright/test"
//Mô tả test plan
test.describe("Kiểm thử đăng nhập E2E", () => {
    //Test case 1: Hiển thị thông báo lỗi khi email trống
    test("Hiển thị thông báo lỗi khi email trống", async ({page}) => {
        await page.fill("#password-input", "123456");
        await page.click("#login-button");
        
        const thongbao = await page.textContent("#thongbao");

        await expect(thongbao).toBe("Email không hợp lệ");
    });
});