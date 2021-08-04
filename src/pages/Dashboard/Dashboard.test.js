import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Dashboard, { agruparVeiculosPorMarca } from "./Dashboard";

const veiculosMock = [
    {
        id: 1,
        ano: 2010,
        marca: {
            id: 2,
            nome: "Teste 2"
        },
        nome: "Veiculo 1",
        valor: 20.0
    },
    {
        id: 2,
        ano: 2015,
        marca: {
            id: 1,
            nome: "Teste 1"
        },
        nome: "Veiculo 2",
        valor: 35.89
    },
    {
        id: 3,
        ano: 2020,
        marca: {
            id: 1,
            nome: "Teste 1"
        },
        nome: "Veiculo 3",
        valor: 10.0
    }
]

const veiculosAgrupadosMock = [
    {
      marca: "Teste 2",
      data: [20]
    }, {
      marca: "Teste 1",
      data: [35.89, 10]
    }
  ]

beforeAll(() => {
    render(<MemoryRouter><Dashboard/></MemoryRouter>);
});

describe("Teste do Componente de Dashboard", () => {
    it("Deve renderizar componente", () => {
        const form = screen.getByTestId("divDashboard");
        expect(form).toBeTruthy();
    });
});

describe("Teste da função agrupadora", () => {
    it("Deve retornar agrupado por marca", () => {
       expect(agruparVeiculosPorMarca(veiculosMock)).toEqual(veiculosAgrupadosMock)
    });

    it("Veiculo nullo", () => {
        expect(agruparVeiculosPorMarca(null)).toEqual([])
     });

     it("Nenhum veiculo cadastrado", () => {
        expect(agruparVeiculosPorMarca([])).toEqual([])
     });

     it("Veiculo undefined", () => {
        expect(agruparVeiculosPorMarca(undefined)).toEqual([])
     });
});