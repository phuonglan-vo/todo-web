import {test, expect} from "@playwright/test"
//Mô tả test plan
test.describe("Kiểm thử chức năng đăng nhập", () => {
    //Mở trang chủ cho tất cả testcase
    test.beforeEach(async ({page}) => {
        //Điều hướng đến trang đăng nhập
        await page.goto("/");
    });
    //Test case 1: chưa nhập gì cả, vùng thông báo phải hiển thị chữ "Email không hợp lệ"
    test("TC001 - Hiển thị thông báo lỗi khi bỏ trống email", async({page}) => {
        //Thao tác click vào nút có id "login-button"
        await page.click("#login-button");

        //Lấy phần tử vùng thông báo id #login-message
        const loginMessage = page.locator("#login-message");

        //Mong đợi kết quả trong vùng thông báo phải là "Email không hợp lệ"
        await expect(loginMessage).toHaveText("Email không hợp lệ");
    });
    //Test case 2: có nhập email, quên nhập mật khẩu
    test("TC002 - Hiển thị thông báo lỗi khi bỏ trống mật khẩu", async({page}) => {
        //Nhập email hợp lệ vào ô input có id "email-input"
        await page.fill("#email-input", "admin@gmail.com");
        await page.click("#login-button");

        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Password không hợp lệ");
    
    });
    //Test case 3: nhập email và password đầy đủ, nhưng email không đúng
    test("TC003 - Hiển thị thông báo lỗi khi nhập sai email hoặc mật khẩu", async({page}) => {
        await page.fill("#email-input", "wrong@gmail.com");
        await page.fill("#password-input", "123456");
        await page.click("#login-button");

        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Đăng nhập thất bại!");
    });
    //Test case 4: nhập email và password đầy đủ, nhưng password không đúng
    test("TC004 - Hiển thị thông báo lỗi khi nhập sai email hoặc mật khẩu", async({page}) => {
        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "123123");
        await page.click("#login-button");

        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Đăng nhập thất bại!");
    });
});