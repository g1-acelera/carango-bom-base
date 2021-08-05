import MarcaService from "./MarcaService"
import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks();

beforeEach(() => {
    fetch.resetMocks();
});

describe("Testes de MarcaService", () => {
    it("Deve retornar a marca", async () => {
        const expected = {id: 1, nome: "Ford"}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.consultar(1)
        expect(response).toStrictEqual(expected)
    })
    it("Deve retornar marcas", async () => {
        const expected = [
            {id: 1, nome: "Fiat"},
            {id: 2, nome: "Ford"},
            {id: 3, nome: "Peugeot"},
            {id: 4, nome: "Volkswagen"}
        ]
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.listar()
        expect(response).toStrictEqual(expected)
    })
    it("Não deve retornar uma marca", async () => {
        const expected = {status: 404}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.consultar(1)
        expect(response).toStrictEqual(expected)
    })
    it("Não deve retornar marcas", async () => {
        const expected = []
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.listar()
        expect(response).toStrictEqual(expected)
    })
    it("Deve cadastrar marcar", async () => {
        const marca = {nome: "Teste"}
        const expected = {id:1, nome: "Teste"}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.cadastrar(marca)
        expect(response).toStrictEqual(expected)
    })
    it("Não deve alterar uma marca", async () => {
        const expected = {status: 404}
        const marca = {id: 28, nome: "Bentley"}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.alterar(marca)
        expect(response).toStrictEqual(expected)
    })
    it("Deve alterar marcar", async () => {
        const expected = {id:26, nome: "Volkswagen"}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.alterar(expected)
        expect(response).toStrictEqual(expected)
    })
    it("Deve excluir marcar", async () => {
        fetch.mockResponseOnce(JSON.stringify(null));
        const response = await MarcaService.excluir(1)
        expect(response).toStrictEqual(null)
    })
    it("Não deve excluir uma marca", async () => {
        const expected = {status: 404}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.excluir(99)
        expect(response).toStrictEqual(expected)
    })
})
describe("Testes de MarcaService com Token incorreto ou inexistente", () => {
    it("Deve retornar erro 403 ao cadastrar", async () => {
        const marca = {nome: "Teste"}
        const expected = {status: 403}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.cadastrar(marca)
        expect(response).toStrictEqual(expected)
    })
    it("Deve retornar erro 403 ao excluir", async () => {
        const expected = {status: 403}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.excluir(1)
        expect(response).toStrictEqual(expected)
    })
    it("Deve retornar erro 403 ao alterar", async () => {
        const marca = {id:26, nome: "Volkswagen"}
        const expected = {status: 403}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await MarcaService.alterar(marca)
        expect(response).toStrictEqual(expected)
    })
})
