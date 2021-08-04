import {render, screen } from "@testing-library/react";
import React from "react";
import CampoDeSelecao from "./CampoDeSelecao";

const atualizaValor = jest.fn();

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
});
