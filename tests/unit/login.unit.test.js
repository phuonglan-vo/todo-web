import { describe, expect, it } from "vitest";  
import { checkEmail, checkPassword } from "../../src/loginStore.js";

describe("Kiểm tra từng hàm nhỏ của các chức năng đăng nhập", () => {
    //Test case 1
    it("Ham checkEmail trả về false khi email trống", () => {
        const result = checkEmail("");
        expect(result).toBe(false);
    });
    //Test case 2
    it("Hàm checkEmail trả về false nếu email <3 ký tự", () => {
        const result = checkEmail("ab");
        expect(result).toBe(true);
    });
    //Test case 3
    it("Hàm checkEmail trả về true nếu email đúng",() => {
        const result = checkEmail("abc@gmail.com");
        expect(result).toBe(true);
    });
    //Test case 4
    it("Hàm checkPassword trả về false khi password trống", () => {
        const result = checkPassword("");
        expect(result).toBe(false);
    });
});