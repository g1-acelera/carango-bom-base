import ListagemUsuarioColunasConst from "./ListagemUsuarioColunas.const";

describe("Listagem usuário colunas testes", () => {
    it("Deve possuir a coluna de Nome", () => {
       const coluna = ListagemUsuarioColunasConst.find(coluna => coluna.header === "Nome");
       expect(coluna.header).toBe("Nome");
    });

    it("Deve possuir a coluna de Email", () => {
        const coluna = ListagemUsuarioColunasConst.find(coluna => coluna.header === "Email");
        expect(coluna.header).toBe("Email");
    });
});
