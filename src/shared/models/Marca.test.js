import Marca from "./Marca";

describe("Marca modelo testes", () => {
    it("Deve possuir os valores iniciais", () => {
        const esperado = {
            nome: "",
        };
        expect(Marca.initialValues()).toStrictEqual(esperado);
    });

    it("Deve retornar a validação de obrigatoriedade para o nome", () => {
        const validacao = Marca.validacoesNome("");
        expect(validacao).toBe("Campo obrigatório");
    });

    it("Não deve retornar a validação de obrigatoriedade quando o nome for preenchido", () => {
        const validacao = Marca.validacoesNome("Fiat");
        expect(validacao).toBe("");
    });

    it("Deve retornar a validação de tamanho mínimo para o nome", () => {
        const validacao = Marca.validacoesNome("aa");
        expect(validacao).toBe("Deve ter ao menos 3 letras");
    });

    it("Não deve retornar a validação de tamanho mínimo quando o nome for preenchido", () => {
        const validacao = Marca.validacoesNome("Fiat");
        expect(validacao).toBe("");
    });

    it("Deve retornar modelo inválido caso campos não estiverem corretos", () => {
        const validacao = Marca.ehModeloValido();
        expect(validacao).toBeFalsy();
    });
});
