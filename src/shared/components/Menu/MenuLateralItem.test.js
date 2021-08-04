import React from "react";
import {fireEvent, render} from "@testing-library/react";

import {autenticacaoContextConsumer, BotaoSimular,} from "../../test-utils/autenticacao-context-consumer";
import MenuLateralItem from "./MenuLateralItem";
import MENU_ITEM from "./constants/menu-item.const";
import {MemoryRouter} from "react-router";

const autenticadosTesteIds = MENU_ITEM.map(item => item.testeId);
const semAutenticacaoTesteIds = MENU_ITEM.filter(item => !item.autenticadoParaVisualizar).map(item => item.testeId);

describe("Menu lateral item teste", () => {
    describe("Título", () => {
       it("Deve exibir o título", () => {
           const {getByTestId} = render(<MemoryRouter><MenuLateralItem/></MemoryRouter>);
           expect(getByTestId("titulo")).toBeInTheDocument();
       });

       it("Deve possuir o texto 'Carango bom'", () => {
           const {getByTestId} = render(<MemoryRouter><MenuLateralItem/></MemoryRouter>);
           expect(getByTestId("titulo")).toHaveTextContent(/Carango bom/i);
       });
    });

    describe("Renderizar itens", () => {
        it("Deve renderizar todos os itens se o usuário estiver logado", () => {
            const {getByTestId} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <BotaoSimular value={value}/>
                        <MemoryRouter><MenuLateralItem/></MemoryRouter>
                    </>
                )
            );
            fireEvent.click(getByTestId("botao-simular"));
            autenticadosTesteIds.forEach(id => expect(getByTestId(id)).toBeInTheDocument());
        });

        it("Deve renderizar apenas os itens visíveis quando o usuário não estiver logado", () => {
            const {getByTestId} = render(<MemoryRouter><MenuLateralItem/></MemoryRouter>);
            semAutenticacaoTesteIds.forEach(id => expect(getByTestId(id)).toBeInTheDocument());
        });
    });
});
