import {fireEvent, render, screen} from "@testing-library/react";
import MenuSuperior from "./MenuSuperior";

let botaoMenu;
let botaoEntrar;
let menuClique = jest.fn();

beforeEach(() => {
    render(
         <MenuSuperior menuClick={menuClique}/>
    );
    botaoEntrar = screen.getByTestId("botao-entrar");
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
    });

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
