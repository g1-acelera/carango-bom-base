import validaObrigatoriedade from './obrigatorio.js'

describe("Teste de obrigatoriedade", () => {
    it("Deve retornar uma mensagem caso o campo não esteja preenchido", () => {
        let resultadoValidacao = validaObrigatoriedade("")

        expect(resultadoValidacao).toBe("Campo obrigatório")
    })
    it("Não deve retornar uma mensagem caso o campo esteja preenchido", () => {
        let resultadoValidacao = validaObrigatoriedade("Preenchido")

        expect(resultadoValidacao).toBe("")
    })
    it("Deve retornar uma mensagem caso o campo seja null", () => {
        let resultadoValidacao = validaObrigatoriedade(null)

        expect(resultadoValidacao).toBe("Campo obrigatório")
    })
    it("Deve retornar uma mensagem caso o campo seja undefined", () => {
        let resultadoValidacao = validaObrigatoriedade(undefined)

        expect(resultadoValidacao).toBe("Campo obrigatório")
    })
})