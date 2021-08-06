import Veiculo from "./Veiculo";

const validacoesNome = (nome) => {
    return Veiculo.validacoesNome(nome);
}

const validacoesValor = (valor) => {
    return Veiculo.validacaoValor(valor);
}

describe("Veículo modelo testes", () => {
    it("Deve possuir os valores iniciais", () => {
       const esperado = {
           nome: "",
           marcaId: "",
           valor: "",
           ano: "",
       };
       expect(Veiculo.initialValues()).toStrictEqual(esperado);
    });

    it("Deve retornar a validação de obrigatoriedade para o nome", () => {
        const validacao = validacoesNome("");
        expect(validacao).toBe("Campo obrigatório");
    });

    it("Não deve retornar a validação de obrigatoriedade quando o nome for preenchido", () => {
        const validacao = validacoesNome("Uni");
        expect(validacao).toBe("");
    });

    it("Deve retornar a validação de tamanho mínimo para o nome", () => {
        const validacao = Veiculo.validacoesNome("aa");
        expect(validacao).toBe("Deve ter ao menos 3 letras");
    });

    it("Não deve retornar a validação de tamanho mínimo quando o  nome for preenchido", () => {
        const validacao = validacoesNome("Uno");
        expect(validacao).toBe("");
    });

    it("Deve retornar a validação de obrigatoriedade para o valor", () => {
        const validacao = validacoesValor("");
        expect(validacao).toBe("Campo obrigatório");
    });

    it("Não deve retornar a validação de obrigatoriedade quando o valor for preenchido", () => {
        const validacao = validacoesValor("123");
        expect(validacao).toBe("");
    });
});
