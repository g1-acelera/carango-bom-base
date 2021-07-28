import React from "react";
import faker from "faker";
import AutenticacaoProvider, {AutenticacaoContext} from "./autenticacao.context";
import {fireEvent, render} from "@testing-library/react";

let usuario;

const configuraCorpoDoTeste = (corpo) => {
    return render(
        <AutenticacaoProvider>
            <AutenticacaoContext.Consumer>
                {corpo}
            </AutenticacaoContext.Consumer>
        </AutenticacaoProvider>
    );
}

beforeEach(() => {
    usuario = {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
    };
});

describe("Autenticação context testes", () => {
    describe("Usuário logado/deslogado", () => {
        it("Deve iniciar com usuário logado falso por padrão", () => {
            const {getByText} = configuraCorpoDoTeste(
                (value) => <span>Usuário logado: {value.ehUsuarioLogado.toString()}</span>
            );
            expect(getByText("Usuário logado: false")).toBeTruthy();
        });

        it("Deve setar usuário logado para verdadeiro", () => {
            const {getByText} = configuraCorpoDoTeste(
                (value) => (
                    <>
                        <button onClick={value.entra}>Entrar</button>
                        <span>Usuário logado: {value.ehUsuarioLogado.toString()}</span>
                    </>
                )
            );
            fireEvent.click(getByText("Entrar"));
            expect(getByText("Usuário logado: true")).toBeTruthy();
        });

        it("Deve setar usuário logado para falso", () => {
            const {getByText} = configuraCorpoDoTeste(
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
            const {getByText} = configuraCorpoDoTeste(
                (value) => <span>Dados do usuário: {value.dadosUsuario}</span>
            );
            expect(getByText("Dados do usuário:")).toBeTruthy();
        });

        it("Deve setar os dados do usuário", () => {
            const {getByText} = configuraCorpoDoTeste(
                (value) => (
                    <>
                        <button onClick={() => value.entra(usuario)}>Entrar</button>
                        <span>Nome: {value.dadosUsuario?.nome}</span>
                        <span>Nome: {value.dadosUsuario?.email}</span>
                    </>
                )
            );
            fireEvent.click(getByText("Entrar"));
            expect(getByText(`Nome: ${usuario.nome}`)).toBeTruthy();
            expect(getByText(`Nome: ${usuario.email}`)).toBeTruthy();
        });

        it("Deve limpar os dados do usuário", () => {
            const {getByText} = configuraCorpoDoTeste(
                (value) => (
                    <>
                        <button onClick={() => value.entra()}>Entrar</button>
                        <button onClick={value.sai}>Sair</button>
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
