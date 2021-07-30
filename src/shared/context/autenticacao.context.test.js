import React from "react";
import {fireEvent} from "@testing-library/react";
import {autenticacaoContextConsumer, usuarioAutenticacao} from "../test-utils/autenticacao-context-consumer";

describe("Autenticação context testes", () => {
    describe("Usuário logado/deslogado", () => {
        it("Deve iniciar com usuário deslogado por padrão", () => {
            const {getByText} = autenticacaoContextConsumer(
                (value) => <span>Usuário logado: {value.ehUsuarioLogado.toString()}</span>
            );
            expect(getByText("Usuário logado: false")).toBeTruthy();
        });

        it("Deve setar usuário logado para verdadeiro", () => {
            const {getByText} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <button onClick={value.adicionaDadosUsuario}>Entrar</button>
                        <span>Usuário logado: {value.ehUsuarioLogado.toString()}</span>
                    </>
                )
            );
            fireEvent.click(getByText("Entrar"));
            expect(getByText("Usuário logado: true")).toBeTruthy();
        });

        it("Deve setar usuário logado para falso", () => {
            const {getByText} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <button onClick={value.entra}>Entrar</button>
                        <button onClick={value.sai}>Sair</button>
                        <span>Usuário logado: {value.ehUsuarioLogado.toString()}</span>
                    </>
                )
            );
            fireEvent.click(getByText("Entrar"));
            fireEvent.click(getByText("Sair"));
            expect(getByText("Usuário logado: false")).toBeTruthy();
        });
    });

    describe("Dados usuário", () => {
        it("Deve iniciar com os dados do usuário vazio por padrão", () => {
            const {getByText} = autenticacaoContextConsumer(
                (value) => <span>Dados do usuário: {value.dadosUsuario}</span>
            );
            expect(getByText("Dados do usuário:")).toBeTruthy();
        });

        it("Deve setar os dados do usuário", () => {
            const {getByText} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <button onClick={() => value.adicionaDadosUsuario(usuarioAutenticacao)}>
                            Entrar
                        </button>
                        <span>Nome: {value.dadosUsuario?.nome}</span>
                        <span>Email: {value.dadosUsuario?.email}</span>
                    </>
                )
            );
            fireEvent.click(getByText("Entrar"));
            expect(getByText(`Nome: ${usuarioAutenticacao.nome}`)).toBeTruthy();
            expect(getByText(`Email: ${usuarioAutenticacao.email}`)).toBeTruthy();
        });

        it("Deve limpar os dados do usuário", () => {
            const {getByText} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <button onClick={() => value.adicionaDadosUsuario()}>Entrar</button>
                        <button onClick={value.removeDadosUsuario}>Sair</button>
                        <span>Nome: {value.dadosUsuario?.nome}</span>
                        <span>Email: {value.dadosUsuario?.email}</span>
                    </>
                )
            );
            fireEvent.click(getByText("Entrar"));
            fireEvent.click(getByText("Sair"));
            expect(getByText("Nome:")).toBeTruthy();
            expect(getByText("Email:")).toBeTruthy();
        });
    });
});
