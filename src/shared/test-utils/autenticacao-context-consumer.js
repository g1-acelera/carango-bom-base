import {render} from "@testing-library/react";
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
    tipo: "admin",
    token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgdmVuZGEgZGUgdmVpY3Vsb3MiLCJzdWIiOiIxIiwiaWF0IjoxNjI3OTE1MDQ2LCJleHAiOjE2MjgwMDE0NDZ9.WLLBTcnC9WHAonY5pn2iGG6r-AMa1U_kcTHWAntTJGQ"
};
