import { describe, it, expect } from 'vitest';
import { fetchUsers, validateUser } from '../../src/userStore';

const USER_API_URL = "https://jsonplaceholder.typicode.com/users";

describe("Test plan: load user via API", () => {
    it("TC-API-USER-01: Check URL valid", async () => {
        const data = fetchUsers(USER_API_URL);
        expect(data.length > 0);
    });
    it("TC-API-USER-02: Check data", async () => {
        const data = await fetchUsers(USER_API_URL);
        const msg = validateUser(data);
        expect(msg).toBe("Dữ liệu hợp lệ!");
    });
});