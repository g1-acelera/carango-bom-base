import LoginModelo from "./Login";

describe("Login modelo testes", () => {
    it("Deve retornar os valores iniciais dos campos", () => {
        const valoresIniciais = {
          email: "",
          senha: "",
        };
       expect(LoginModelo.valoresIniciais()).toStrictEqual(valoresIniciais);
    });
});
