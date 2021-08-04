import React from "react";
import {Redirect, Route} from "react-router-dom";

import {useAutenticacaoContext} from "../shared/context/autenticacao.context";
import ROTAS from "../shared/constants/rotas.const";

const RotaProtegida = ({rest, path, component}) => {
    const {ehUsuarioLogado} = useAutenticacaoContext();

    if (!ehUsuarioLogado) {
        return <Redirect to={{pathname: ROTAS.VEICULOS}}/>;
    }

    return (
        <>
            {
                ehUsuarioLogado &&
                <Route {...rest} path={path} component={component}/>
            }
        </>
    );
};

export default RotaProtegida;
