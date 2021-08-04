import LoginService from "./LoginService";

jest.mock("./LoginService");

describe("Login service testes", () => {
    it("Deve retornar o token", async () => {
        const res = {token: "token"};
        const mock = await LoginService.login.mockReturnValue(res);
        expect(mock()).toStrictEqual(res);
    });

    it("Deve retornar erro caso dados inválidos", async () => {
        const res = {status: 400};
        const mock = await LoginService.login.mockRejectedValue(res);
        await expect(mock()).rejects.toStrictEqual(res);
    });
});
