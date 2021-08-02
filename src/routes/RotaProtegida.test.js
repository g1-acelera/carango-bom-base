import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {Router} from "react-router";
import {createMemoryHistory} from "history";

import {
    autenticacaoContextConsumer,
    BotaoSimular,
    usuarioAutenticacao
} from "../shared/test-utils/autenticacao-context-consumer";
import RotaProtegida from "./RotaProtegida";
import {setDadosUsuarioLocalStorage} from "../shared/local-storage/local-storage";
import ROTAS from "../shared/constants/rotas.const";

const ComponenteProtegido = () => {
    return <h1>Componente protegido</h1>
};

describe("Rota protegida testes", () => {
    describe("Usuário logado", () => {
        it("Deve permitir o acesso ao componente protegido", () => {
            const history = createMemoryHistory();
            setDadosUsuarioLocalStorage(usuarioAutenticacao);
            history.push("/componente-protegido");
            const {getByTestId, getByText} = autenticacaoContextConsumer(
                (value) => (
                    <>
                        <BotaoSimular value={value}/>
                        <Router history={history}>
                            <RotaProtegida component={ComponenteProtegido} path="/componente-protegido"/>
                        </Router>
                    </>
                )
            );
            fireEvent.click(getByTestId("botao-simular"));
            expect(getByText(/Componente protegido/i)).toBeInTheDocument();
            expect(history.location.pathname).toBe("/componente-protegido");
        });
    });

    describe("Sem usuário logado", () => {
        it("Deve redirecionar o usuário para a tela de login", () => {
            const history = createMemoryHistory();
            history.push("/componente-protegido");
            render(
                <Router history={history}>
                    <RotaProtegida component={ComponenteProtegido} path="/componente-protegido"/>
                </Router>
            );
            expect(history.location.pathname).toBe(ROTAS.VEICULOS);
        });
    });
});
