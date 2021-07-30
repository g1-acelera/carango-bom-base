import React from "react";
import {fireEvent, render} from "@testing-library/react";
import MenuSuperior from "./MenuSuperior";
import {
    autenticacaoContextConsumer,
    BotaoSimular,
    usuarioAutenticacao
} from "../../test-utils/autenticacao-context-consumer";

let menuClick = jest.fn();

describe("Teste de menu superior", () => {
    describe("Botão entrar", () => {
        it("Deve existir o botão de entrar se o usuario nao estiver logado", () => {
            const {getByTestId} = render(<MenuSuperior/>);
            expect(getByTestId("botao-entrar")).toBeInTheDocument();
        });

        it("Deve possuir o texto 'Entrar'", () => {
            const {getByTestId} = render(<MenuSuperior/>);
            expect(getByTestId("botao-entrar")).toHaveTextContent(/Entrar/i);
        });

        it("Não deve exibir o botão entrar quando o usuário estiver logado", () => {
            const {queryByTestId, getByTestId} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <BotaoSimular value={value}/>
                        <MenuSuperior/>
                    </>
                )
            );
            fireEvent.click(getByTestId("botao-simular"));
            expect(queryByTestId("botao-entrar")).not.toBeInTheDocument();
        });
    });

    describe("Botão sair", () => {
        it("Não deve existir o botão sair se o usuário não estiver logado", () => {
           const {queryByTestId} = render(<MenuSuperior/>);
           expect(queryByTestId("botao-sair")).not.toBeInTheDocument();
        });

        it("Deve exibir o botão sair quando o usuário estiver logado", () => {
            const {queryByTestId, getByTestId} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <BotaoSimular value={value}/>
                        <MenuSuperior/>
                    </>
                )
            );
            fireEvent.click(getByTestId("botao-simular"));
            expect(queryByTestId("botao-sair")).toBeInTheDocument();
        });

        it("Deve possuir o texto 'Sair'", () => {
            const {getByTestId} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <BotaoSimular value={value}/>
                        <MenuSuperior/>
                    </>
                )
            );
            fireEvent.click(getByTestId("botao-simular"));
            expect(getByTestId("botao-sair")).toHaveTextContent(/Sair/i);
        });
    });

    describe("Botão abrir/fechar menu lateral", () => {
        it("Deve existir", () => {
            const {getByTestId} = render(<MenuSuperior/>);
            expect(getByTestId("botao-menu")).toBeInTheDocument();
        });

        it("Deve possuir aria label 'Abrir menu'", () => {
            const {getByTestId} = render(<MenuSuperior/>);
            expect(getByTestId("botao-menu")).toHaveAttribute("aria-label", "Abrir menu");
        });

        it("Deve emitir o evento de clique quando clicado", () => {
            const {getByTestId} = render(<MenuSuperior menuClick={menuClick}/>);
            fireEvent.click(getByTestId("botao-menu"));
            expect(menuClick).toHaveBeenCalled();
        });
    });
});
