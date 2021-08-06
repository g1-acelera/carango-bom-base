import Usuario from "./Usuario";

describe("Usuário modelo testes", () => {
    it("Deve possuir os valores iniciais", () => {
       const esperado = {
           email: "",
           senha: "",
       };
       expect(Usuario.initialValues()).toStrictEqual(esperado);
    });

    it("Deve retornar a validação de email", () => {
       const validacao = Usuario.validacoesEmail("email@email");
       expect(validacao).toBe("Email inválido");
    });

    it("Deve retornar modelo inválido caso campos não estiverem corretos", () => {
        const validacao = Usuario.ehModeloValido();
        expect(validacao).toBeFalsy();
    });
});