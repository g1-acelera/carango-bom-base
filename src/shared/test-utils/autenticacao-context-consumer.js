import {render} from "@testing-library/react";
import faker from "faker";
import AutenticacaoProvider, {AutenticacaoContext} from "../context/autenticacao.context";
import React from "react";

export const autenticacaoContextConsumer = (estado) => {
    return render(
        <AutenticacaoProvider>
            <AutenticacaoContext.Consumer>
                {estado}
            </AutenticacaoContext.Consumer>
        </AutenticacaoProvider>
    );
}

export const usuarioAutenticacao = {
  nome: faker.name.firstName(),
  email: faker.internet.email(),
};
