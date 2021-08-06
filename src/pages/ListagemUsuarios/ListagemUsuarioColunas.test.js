import ListagemUsuarioColunasConst from "./ListagemUsuarioColunasConst";

describe("Listagem usuário colunas testes", () => {
    it("Deve possuir a coluna de Email", () => {
        const coluna = ListagemUsuarioColunasConst.find(dados => dados.header === "Email");
        expect(coluna.header).toBe("Email");
    });
});
