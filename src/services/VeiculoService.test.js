import VeiculoService from "./VeiculoService"
import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks();

beforeEach(() => {
    fetch.resetMocks();
});

describe("Testes de VeiculoService", () => {
    it("Deve retornar a veiculo", async () => {
        const expected = {
            id: 1, 
            ano: 2019, 
            nome: "Focus", 
            valor: 19900.99, 
            veiculo: {id:1, nome: "Ford"}
        }
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.consultar(1)
        expect(response).toStrictEqual(expected)
    })
    it("Deve retornar veiculos", async () => {
        const expected = [
            {
                id: 1, 
                ano: 2019, 
                nome: "Golf", 
                valor: 89900, 
                veiculo: {id:1, nome: "Volkswagen"}
            },
            {
                id: 1, 
                ano: 2019, 
                nome: "Focus", 
                valor: 19900.99, 
                veiculo: {id:2, nome: "Ford"}
            },
            {
                id: 1, 
                ano: 2008, 
                nome: "Uno de firma com Escada", 
                valor: 15000, 
                veiculo: {id:3, nome: "Fiat"}
            },
        ]
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.listar()
        expect(response).toStrictEqual(expected)
    })
    it("Não deve retornar um veiculo", async () => {
        const expected = {status: 404}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.consultar(1)
        expect(response).toStrictEqual(expected)
    })
    it("Não deve retornar veiculos", async () => {
        const expected = []
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.listar()
        expect(response).toStrictEqual(expected)
    })
    it("Deve cadastrar veiculor", async () => {
        const expected = {
            id: 1, 
            ano: 2008, 
            nome: "Uno de firma com Escada", 
            valor: 15000, 
            veiculo: {id:3, nome: "Fiat"}
        }
        const veiculo = {
            ano: 2008, 
            nome: "Uno de firma com Escada", 
            valor: 15000, 
            veiculo: {id:3, nome: "Fiat"}
        }
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.cadastrar(veiculo)
        expect(response).toStrictEqual(expected)
    })
    it("Deve alterar veiculor", async () => {
        const expected = {
            id: 39, 
            ano: 2019, 
            nome: "Golf", 
            valor: 89900, 
            veiculo: {id:1, nome: "Volkswagen"}
        }
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.alterar(expected)
        expect(response).toStrictEqual(expected)
    })
    it("Não deve alterar um veiculo", async () => {
        const expected = {status: 404}
        const veiculo = {
            id: 39,
            ano: 2008, 
            nome: "Uno de firma com Escada", 
            valor: 15000, 
            veiculo: {id:3, nome: "Fiat"}
        }
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.alterar(veiculo)
        expect(response).toStrictEqual(expected)
    })
    it("Deve excluir veiculor", async () => {
        fetch.mockResponseOnce(JSON.stringify(null));
        const response = await VeiculoService.excluir(1)
        expect(response).toStrictEqual(null)
    })
    it("Não deve excluir um veiculo", async () => {
        const expected = {status: 404}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.excluir(39)
        expect(response).toStrictEqual(expected)
    })
});
describe("Testes de VeiculoService com Token incorreto ou inexistente", () => {
    it("Deve retornar erro 403 ao cadastrar", async () => {
        const veiculo = {
            ano: 2019, 
            nome: "Golf", 
            valor: 89900, 
            veiculo: {id:1, nome: "Volkswagen"}
        }
        const expected = {status: 403}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.cadastrar(veiculo)
        expect(response).toStrictEqual(expected)
    })
    it("Deve retornar erro 403 ao excluir", async () => {
        const expected = {status: 403}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.excluir(19)
        expect(response).toStrictEqual(expected)
    })
    it("Deve retornar erro 403 ao alterar", async () => {
        const veiculo = {
            id: 28, 
            ano: 2008, 
            nome: "Uno de firma com Escada", 
            valor: 15000, 
            veiculo: {id:3, nome: "Fiat"}
        }
        const expected = {status: 403}
        fetch.mockResponseOnce(JSON.stringify(expected));
        const response = await VeiculoService.alterar(veiculo)
        expect(response).toStrictEqual(expected)
    })
})