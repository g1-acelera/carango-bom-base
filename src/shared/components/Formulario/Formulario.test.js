import "../../../config-test/config-test";
import {render} from "@testing-library/react";

import Formulario from "./Formulario";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";
import {MemoryRouter} from "react-router-dom";

const MockForm = () => {
  return <CampoDeTexto
    id="mock-campo-texto"
    name="mock"
    label="Mock Campo de Texto"
    value={"MOCK"}
    required={true}/>
};

const setup = () => {
  const props = {
    ehValido: jest.fn(),
    cadastroServico: jest.fn(),
    alteraServico: jest.fn()
  }
  const wrapper = render(
    <MemoryRouter>
      <Formulario {...props}><MockForm/></Formulario>
    </MemoryRouter>
  );

  return {props, wrapper};
};

describe("Teste do Componente de Formulário", () => {
  it("Deve renderizar o componente", () => {
    const {wrapper} = setup();
    expect(wrapper.getByTestId("form")).toBeTruthy();
  });
});