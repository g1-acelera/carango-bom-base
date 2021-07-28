import {getDadosUsuario, setDadosUsuario, usuarioId} from "./local-storage";

let dadosUsuario;

beforeEach(() => {
    dadosUsuario = {
        nome: `John Doe`,
        id: `1`,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.X_M6O0tdAGnnqqYoV_Q4xQZeG58gth-PG7KSW96tsic"
    };
    setDadosUsuario(null);
});

describe("Local storage testes", () => {
    describe("Dados usuário", () => {
        it("Deve adicionar os dados do usuário", () => {
            setDadosUsuario(dadosUsuario);
            expect(getDadosUsuario()).toStrictEqual(dadosUsuario);
        });

        it('Deve retornar null quando não houver dados de usuário', () => {
            expect(getDadosUsuario()).toBeNull();
        });

        it("Deve retornar o id do usuário", () => {
            setDadosUsuario(dadosUsuario);
            expect(usuarioId()).toBe(1);
        });

        it("Deve retornar vazio quando não houver id do usuário", () => {
            expect(usuarioId()).toBeUndefined();
        });
    });
});
