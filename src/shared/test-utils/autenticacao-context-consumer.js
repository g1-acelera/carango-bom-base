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

export const BotaoSimular = ({value}) => {
    return (
        <button
            data-testid="botao-simular"
            onClick={() => value.adicionaDadosUsuario(usuarioAutenticacao)}
        >
            Simular
        </button>
    );
}

export const usuarioAutenticacao = {
    id: faker.datatype.number({min: 1}),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.X_M6O0tdAGnnqqYoV_Q4xQZeG58gth-PG7KSW96tsic"
};
