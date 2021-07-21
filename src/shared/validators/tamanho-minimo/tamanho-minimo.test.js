import validaTamanhoMinimo from "./tamanho-minimo.js";

describe("Teste de tamanho mínimo", () => {
    it("Deve retornar uma mensagem se tamanho do campo < que o 4", () => {
        let resultadoValidacao = validaTamanhoMinimo("abc", 4)
        
        expect(resultadoValidacao).toBe("Deve ter ao menos 4 letras")
    })
    it("Não deve retornar nenhuma mensagem se o tamanho do campo for >= que o minímo", () => {
        let resultadoValidacao = validaTamanhoMinimo("abc", 3)
        
        expect(resultadoValidacao).toBe("")
    })
    it("Deve retornar uma mensagem se tamanho do campo < que o 5", () => {
        let resultadoValidacao = validaTamanhoMinimo("abcd", 5)
        
        expect(resultadoValidacao).toBe("Deve ter ao menos 5 letras")
    })
    it("Deve retornar uma mensagem se o campo for null", () => {
        let resultadoValidacao = validaTamanhoMinimo(null, 10)
        
        expect(resultadoValidacao).toBe("")
    })
    it("Deve retornar uma mensagem se o campo for undefined", () => {
        let resultadoValidacao = validaTamanhoMinimo(undefined, 8)
        
        expect(resultadoValidacao).toBe("")
    })
})