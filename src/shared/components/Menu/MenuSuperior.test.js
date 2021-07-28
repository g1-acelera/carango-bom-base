import {fireEvent, render, screen} from "@testing-library/react";
import MenuSuperior from "./MenuSuperior";
import AutenticacaoProvider, {AutenticacaoContext} from "./../../context/autenticacao.context";

let botaoMenu;
let menuClique = jest.fn();
let entra = jest.fn(entra);
let sai = jest.fn();

beforeEach(() => {
    render(
        <AutenticacaoContext.Provider value={{entra,sai}}>
            <MenuSuperior menuClick={menuClique}></MenuSuperior>
        </AutenticacaoContext.Provider>
    );
    botaoMenu = screen.getByTestId("botao-menu");
});

describe("Teste de menu superior", () => {
    describe("Botão entrar", () => {
        it("Deve existir o botao de entrar se o usuario nao tiver logado", () => {
            const botaoEntrar = screen.getByTestId("botao-entrar");
            expect(botaoEntrar).toBeDefined();
        });

        it("Deve possuir o texto 'Entrar' se o usuario nao tiver logado", () => {
            const botaoEntrar = screen.getByTestId("botao-entrar");
            expect(botaoEntrar).toHaveTextContent(/Entrar/i);
        });
        it("Deve existir o botao de entrar se o usuario nao tiver logado apos deslogar", () => {
            entra({nome: "Jabulani"});
            const botaoEntrar = screen.getByTestId("botao-entrar");
            expect(botaoEntrar).toBeDefined();
        });
    });

    // describe("Botão sair", () => {
    //     it("Deve existir o botao de sair se o usuario tiver logado", () => {
    //         const botaoEntrar = screen.getByTestId("botao-entrar");
    //         fireEvent.click(botaoEntrar);
    //         expect(botaoSair).toBeDefined();
    //     });

    //     it("Deve possuir o texto 'Sair'", () => {
    //         expect(botaoSair).toHaveTextContent(/Sair/i);
    //     });
    // });

    describe("Botão abrir/fechar menu lateral", () => {
        it("Deve existir", () => {
           expect(botaoMenu).toBeDefined();
        });

        it("Deve possuir aria label 'Abrir menu'", () => {
            expect(botaoMenu).toHaveAttribute("aria-label", "Abrir menu");
        });

        it("Deve emitir o evento de clique quando clicado", () => {
            fireEvent.click(botaoMenu);
            expect(menuClique).toHaveBeenCalled();
        });
    });
});
