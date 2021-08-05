import {render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router-dom";
import CadastroVeiculo from "./CadastroVeiculo";

beforeEach(() => {
    render(<MemoryRouter><CadastroVeiculo/></MemoryRouter>);
});

describe("Teste do Componente de Cadastro de Veículo", () => {
    it("Deve renderizar o componente", () => {
        const form = screen.getByTestId("form");
        const btnSalvar = screen.getByTestId("btnSalvar");
        const btnCancelar = screen.getByTestId("btnCancelar");
        expect(form).toBeTruthy();
        expect(btnSalvar).toBeDisabled();
        expect(btnCancelar).toBeEnabled();
    });
    it("Não deve permitir cadastrar quando Modelo tiver tamanho menor que 3", () => {
        const veiculoModelo = screen.getByTestId("veiculo-modelo-text-field");
        const btnSalvar = screen.getByTestId("btnSalvar");
        veiculoModelo.setAttribute("value", "Ca");
        expect(btnSalvar).toBeDisabled();
    });
    it("Não deve permitir cadastrar quando apenas Modelo for preenchido", () => {
        const veiculoModelo = screen.getByTestId("veiculo-modelo-text-field");
        const btnSalvar = screen.getByTestId("btnSalvar");
        veiculoModelo.setAttribute("value", "Toyota");
        expect(btnSalvar).toBeDisabled();
    });
    it("Não deve permitir cadastrar quando apenas Ano for preenchido", () => {
        const veiculoAno = screen.getByTestId("veiculo-ano-text-field");
        const btnSalvar = screen.getByTestId("btnSalvar");
        veiculoAno.setAttribute("value", "1995");
        expect(btnSalvar).toBeDisabled();
    });
    it("Não deve permitir cadastrar quando apenas Marca for preenchido", () => {
        const veiculoMarca = screen.getByTestId("select-test-id");
        const btnSalvar = screen.getByTestId("btnSalvar");
        veiculoMarca.setAttribute("value", "1");
        expect(btnSalvar).toBeDisabled();
    });
    it("Não deve permitir cadastrar quando apenas Valor for preenchido", () => {
        const veiculoValor = screen.getByTestId("veiculo-valor-text-field");
        const btnSalvar = screen.getByTestId("btnSalvar");
        veiculoValor.setAttribute("value", "100.000");
        expect(btnSalvar).toBeDisabled();
    });

    it("Deve mostrar o título de Cadastro quando carregar componente pela URL de Cadastro de Veículo", () => {
        const cadastroVeiculo = renderer.create(<MemoryRouter initialEntries={[{ pathname: "/cadastro-veiculo" }]} ><CadastroVeiculo/></MemoryRouter>);

        expect(cadastroVeiculo.root.findByProps({id: "cadastro-veiculo-title"}).children).toEqual(['Cadastrar Veículo']);
    });
    it("Deve mostrar o título de Alterar quando carregar componente pela URL de Alteração de Veículo", () => {
        const cadastroVeiculo = renderer.create(<MemoryRouter initialEntries={[{ pathname: "/alteracao-veiculo/1" }]} ><CadastroVeiculo/></MemoryRouter>);

        expect(cadastroVeiculo.root.findByProps({id: "cadastro-veiculo-title"}).children).toEqual(['Alterar Veículo']);
    });
});