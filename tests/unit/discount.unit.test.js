import { describe, expect, it } from 'vitest';
import { validateSoTien, validatePhanTram } from '../../src/discountStore.js';

describe("Kiểm tra hàm validateSoTien", () => {
    //Test case 1: Bỏ trống số tiền
    it("Bỏ trống số tiền", () => {
        const result = validateSoTien("");
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    //Test case 2: Nhập số tiền = 0
    it("Nhập số tiền = 0", () => {
        const result = validateSoTien(0);
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    //Test case 3: Nhập số tiền âm
    it("Nhập số tiền âm", () => {
        const result = validateSoTien(-100);
        expect(result).toBe("Số tiền không hợp lệ");
    });
    //Test case 4: Nhập số tiền hợp lệ, không nhập giảm giá
    it("Nhập số tiền hợp lệ, không nhập giảm giá", () => {
        const result = validateSoTien(1000);
        expect(result).toBe("");
    });
    //Test case 5: Nhập số tiền là ký tự số
    it("Nhập số tiền là ký tự số", () => {
        const result = validateSoTien("abc");
        expect(result).toBe("");
    });
});