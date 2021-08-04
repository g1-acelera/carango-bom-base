import {render, screen, fireEvent, waitForElement} from "@testing-library/react";
import React from "react";
import CampoDeSelecao from "./CampoDeSelecao";

const atualizaValor = jest.fn();

const marcasMock = [
    {
        id: 1,
        marca: "Renault"
    },
    {
        id: 2,
        marca: "Fiat"
    }
]

const renderCards = (marcas) => {
  render(<CampoDeSelecao id="selecao-id"
  name="nome"
  value=""
  label="Selecionar"
  onChange={atualizaValor}
  dados={marcas}/>);
};

describe("Test", () => {
  it("Seleção dados null", () => {
    renderCards(null);
    const form = screen.getByTestId("select-test-id");
    expect(form).toBeTruthy();
    expect(screen.queryByTestId("-item", { exact: false})).toBeNull();
  });

  it("Seleção dados undefined", () => {
    renderCards(undefined);
    const form = screen.getByTestId("select-test-id");
    expect(form).toBeTruthy();
    expect(screen.queryByTestId("-item", { exact: false})).toBeNull();
  });

  it("Seleção dados vazio", () => {
    renderCards([]);
    const form = screen.getByTestId("select-test-id");
    expect(form).toBeTruthy();
    expect(screen.queryByTestId("-item", { exact: false})).toBeNull();
  });

//   it("Exibir seleção com os dados", async ()  => {
//     renderCards(marcasMock);
//     // const renaultCard = screen.getByTestId("1-item");
//     // const fiatCard = screen.getByTestId("2-item");
//     // expect(renaultCard).toBeDefined();
//     // expect(fiatCard).toBeTruthy();
//     const form = screen.getByTestId("select-test-id");
//     expect(form.find)
//   });
});
