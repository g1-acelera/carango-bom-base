import faker from "faker";
import fetchMock from "jest-fetch-mock";
import UsuarioService from "./UsuarioService";

fetchMock.enableMocks();

beforeEach(() => {
    fetch.resetMocks();
});

describe("Usuário service testes", () => {
    it("Deve cadastrar usuário", async () => {
        const usuario = {email: faker.internet.email(), senha: faker.internet.password()};
        const esperado = {id:1, email: usuario.email};
        fetch.mockResponseOnce(JSON.stringify(esperado));
        const resposta = await UsuarioService.cadastrar(usuario);
        expect(resposta).toStrictEqual(esperado);
    });

    it("Deve retornar a usuário", async () => {
        const esperado = {id: 1, email: faker.internet.email()};
        fetch.mockResponseOnce(JSON.stringify(esperado));
        const resposta = await UsuarioService.consultar(1);
        expect(resposta).toStrictEqual(esperado);
    });

    it("Deve retornar usuários", async () => {
        const esperado = Array.from({length: 5}).map((item, index) => {
            return {
                id: index + 1,
                email: faker.internet.email(),
            }
        });
        fetch.mockResponseOnce(JSON.stringify(esperado));
        const resposta = await UsuarioService.listar();
        expect(resposta).toStrictEqual(esperado);
        expect(resposta.length).toBe(5);
    });

    it("Não deve retornar usuário", async () => {
        const esperado = {status: 404};
        fetch.mockResponseOnce(JSON.stringify(esperado));
        const resposta = await UsuarioService.consultar(1);
        expect(resposta).toStrictEqual(esperado);
    })
});
