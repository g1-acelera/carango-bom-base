import React from "react"
import {render, screen} from "@testing-library/react"

import Tabela from "./Tabela"

jest.mock("./ColunaDeAcoes", () => () => <div data-testid="coluna-deacoes"/>)

const colunas = [
    {
      header: "Coluna 1",
      accessor: "coluna_1",
    },
    {
      header: "Coluna 2",
      accessor: "coluna_2",
    },
    {
      header: "Coluna 3",
      accessor: "coluna_3",
    },
    {
      header: "Coluna 4",
      accessor: "coluna_4",
      type: "currency"
    },
]

const dados = [
    {
        coluna_1 : "Teste coluna 1",
        coluna_2 : "Teste coluna 2",
        coluna_3 : "Teste coluna 3",
        coluna_4 : "100",
    },
    {
        coluna_1 : "Teste coluna 1",
        coluna_2 : "Teste coluna 2",
        coluna_3 : "Teste coluna 3",
        coluna_4 : "200",
    },
    {
        coluna_1 : "Teste coluna 1",
        coluna_2 : "Teste coluna 2",
        coluna_3 : "Teste coluna 3",
        coluna_4 : "300",
    },
    {
        coluna_1 : "Teste coluna 1",
        coluna_2 : "Teste coluna 2",
        coluna_3 : "Teste coluna 3",
        coluna_4 : "4000.99",
    }
]

const mockService = jest.mock("../../../services/VeiculoService")

beforeEach(() => {
    render(
        <Tabela
            columns={colunas}
            data={dados}
            colunaDeAcoes={false}
            service={mockService}
            caminhoDoObjeto="objetos"
        />
    )
})

describe("Testes do componente de tabela", () => {
    it("Deve existir", () => {
        const tabela = screen.getByTestId("tabela")
        expect(tabela).toBeDefined()
    })
    it("Deve ter coluna de ações", () => {
        render(<Tabela columns={colunas}
                        data={dados}
                        colunaDeAcoes={true}
                        service={mockService}
                        caminhoDoObjeto="objetos"/>)

        const acoes = screen.getAllByTestId("coluna-deacoes")

        expect(acoes).toHaveLength(4)
    })
    it("Não deve ter coluna de ações", () => {
        const elementos = screen.queryAllByTestId("coluna-deacoes")

        expect(elementos).toStrictEqual([])
    })
    it("Deve ter 4 colunas", () => {
        const coluna_0 = screen.getByTestId("coluna-0")
        const coluna_3 = screen.getByTestId("coluna-3")

        expect(coluna_0).toBeInTheDocument()
        expect(coluna_3).toBeInTheDocument()
    })
    it("Deve ter 4 linhas", () => {
        const linha_0 = screen.getByTestId("linha-0")
        const linha_3 = screen.getByTestId("linha-3")

        expect(linha_0).toBeInTheDocument()
        expect(linha_3).toBeInTheDocument()
    })
    it("Deve ter convertido os valores da quarta coluna para moeda", () => {
        expect(screen.getByText("R$ 100")).toBeInTheDocument()
        expect(screen.getByText("R$ 200")).toBeInTheDocument()
        expect(screen.getByText("R$ 300")).toBeInTheDocument()
        expect(screen.getByText("R$ 4,000.99")).toBeInTheDocument()
    })
    it("Deve renderizar o filtro global", () => {
        const filtroGlobal = screen.getByTestId("filtro-global")

        expect(filtroGlobal).toBeInTheDocument()
    })
})