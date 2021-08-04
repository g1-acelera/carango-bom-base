import validaEmail from "./email";

describe("Email testes", () => {
    it("Deve retornar mensagem quando o email estiver fora do padrão", () => {
      const mensagem = validaEmail("email@email");
      expect(mensagem).toBe("Email inválido");
    });

    it("Deve retornar vazio quando não receber nenhum valor a ser verificado", () => {
        const mensagem = validaEmail(null);
        expect(mensagem).toBe("");
    });

    it("Deve retornar vazio quando o email inserido for válido", () => {
        const mensagem = validaEmail("email@gmail.com");
        expect(mensagem).toBe("");
    });
});
