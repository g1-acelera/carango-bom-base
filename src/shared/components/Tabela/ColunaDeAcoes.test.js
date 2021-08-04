import React from "react"
import ColunaDeAcoes from "./ColunaDeAcoes"
import {configure} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import {render, screen} from "@testing-library/react"

const mockService = jest.mock("../../../services/VeiculoService")

configure({ adapter: new Adapter() })

describe("Testes da coluna de ações", () => {
    it("Deve renderizar botão de excluir", () => {
        render(<ColunaDeAcoes 
                object_id={1}
                service={mockService}
                caminhoDoObjeto="objects"/>
       )
        const botaoExcluir = screen.getByTestId("botao-excluir")
        expect(botaoExcluir).toBeDefined();
    })
    it("Deve renderizar botão de alterar", () => {
        render(<ColunaDeAcoes 
                object_id={1}
                service={mockService}
                caminhoDoObjeto="objects"/>
       )
        const botaoAlterar = screen.getByTestId("botao-alterar")
        expect(botaoAlterar).toBeDefined();
    })
})