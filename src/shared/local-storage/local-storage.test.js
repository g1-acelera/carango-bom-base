import {
    estaLogadoLocalStorage,
    getDadosUsuarioLocalStorage,
    limpaDadosUsuarioLocalStorage,
    setDadosUsuarioLocalStorage,
    usuarioIdLocalStorage
} from "./local-storage";

let dadosUsuario;

beforeEach(() => {
    dadosUsuario = {
        tipo: "admin",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.X_M6O0tdAGnnqqYoV_Q4xQZeG58gth-PG7KSW96tsic"
    };
    setDadosUsuarioLocalStorage(null);
});

describe("Local storage testes", () => {
    describe("Dados usuário", () => {
        it("Deve adicionar os dados do usuário", () => {
            setDadosUsuarioLocalStorage(dadosUsuario);
            expect(getDadosUsuarioLocalStorage()).toStrictEqual(dadosUsuario);
        });

        it('Deve retornar null quando não houver dados de usuário', () => {
            expect(getDadosUsuarioLocalStorage()).toBeNull();
        });

        it("Deve retornar o id do usuário", () => {
            setDadosUsuarioLocalStorage(dadosUsuario);
            expect(usuarioIdLocalStorage()).toBe(1);
        });

        it("Deve retornar vazio quando não houver id do usuário", () => {
            expect(usuarioIdLocalStorage()).toBeUndefined();
        });

        it("Deve limpar os dados armazenados do usuário (limpaDadosUsuarioLocalStorage)", () => {
            setDadosUsuarioLocalStorage(dadosUsuario);
            limpaDadosUsuarioLocalStorage();
            expect(getDadosUsuarioLocalStorage()).toBeNull();
        });
    });

    describe("Login Usuário", () =>  {
        it("Deve estar logado", () => {
            setDadosUsuarioLocalStorage(dadosUsuario);
            expect(estaLogadoLocalStorage()).toBeTruthy();
        });

        it("Não deve estar logado", () => {
            expect(estaLogadoLocalStorage()).toBeFalsy();
        });
    });
});