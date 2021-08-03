import {render, screen} from "@testing-library/react";
import React from "react";
import Cards from "./Cards";

let component;

const veiculosMock = [
  {
    marca: "Renault",
    data: [20, 150, 5656]
  }, {
    marca: "Fiat",
    data: [20, 150, 5656]
  }
]

const renderCards = (veiculos) => {
  component = render(<Cards veiculos={veiculos}/>);
};

describe("Test", () => {
  it("Validar veiculos null", () => {
    renderCards(null);
    const form = screen.getByTestId("divCards");
    expect(form).toBeTruthy();
    expect(screen.queryByTestId("card")).toBeNull();
  });

  it("Validar veiculos undefined", () => {
    renderCards(undefined);
    const form = screen.getByTestId("divCards");
    expect(form).toBeTruthy();
    expect(screen.queryByTestId("card")).toBeNull();
  });

  it("Validar veiculos vazio", () => {
    renderCards([]);
    const form = screen.getByTestId("divCards");
    expect(form).toBeTruthy();
    expect(screen.queryByTestId("card")).toBeNull();
  });

  it("Validar veiculos", () => {
    renderCards(veiculosMock);
    const renaultCard = screen.getAllByTestId("Renault-card");
    const fiatCard = screen.getAllByTestId("Fiat-card");
    expect(renaultCard).toBeDefined();
    expect(fiatCard).toBeTruthy();
  });
});
