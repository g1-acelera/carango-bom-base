import {
    estaLogadoLocalStorage,
    getDadosUsuarioLocalStorage,
    limpaDadosUsuarioLocalStorage,
    setDadosUsuarioLocalStorage,
    usuarioIdLocalStorage
} from "./local-storage";
import {usuarioAutenticacao} from "../test-utils/autenticacao-context-consumer";

beforeEach(() => {
    setDadosUsuarioLocalStorage(null);
});

describe("Local storage testes", () => {
    describe("Dados usuário", () => {
        it("Deve adicionar os dados do usuário", () => {
            setDadosUsuarioLocalStorage(usuarioAutenticacao);
            expect(getDadosUsuarioLocalStorage()).toStrictEqual(usuarioAutenticacao);
        });

        it('Deve retornar null quando não houver dados de usuário', () => {
            expect(getDadosUsuarioLocalStorage()).toBeNull();
        });

        it("Deve retornar o id do usuário", () => {
            setDadosUsuarioLocalStorage(usuarioAutenticacao);
            expect(usuarioIdLocalStorage()).toBe("1");
        });

        it("Deve retornar vazio quando não houver id do usuário", () => {
            expect(usuarioIdLocalStorage()).toBeUndefined();
        });

        it("Deve limpar os dados armazenados do usuário (limpaDadosUsuarioLocalStorage)", () => {
            setDadosUsuarioLocalStorage(usuarioAutenticacao);
            limpaDadosUsuarioLocalStorage();
            expect(getDadosUsuarioLocalStorage()).toBeNull();
        });
    });

    describe("Login Usuário", () =>  {
        it("Deve estar logado", () => {
            setDadosUsuarioLocalStorage(usuarioAutenticacao);
            expect(estaLogadoLocalStorage()).toBeTruthy();
        });

        it("Não deve estar logado", () => {
            expect(estaLogadoLocalStorage()).toBeFalsy();
        });
    });
});