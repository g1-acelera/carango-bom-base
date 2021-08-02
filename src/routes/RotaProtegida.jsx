import React from "react";
import {Redirect, Route} from "react-router-dom";

import {useAutenticacaoContext} from "../shared/context/autenticacao.context";
import ROTAS from "../shared/constants/rotas.const";

const RotaProtegida = ({rest, path, component, children}) => {
    const {ehUsuarioLogado} = useAutenticacaoContext();

    return (
        <>
            {!ehUsuarioLogado && <Redirect to={ROTAS.VEICULOS}/>}
            {
                ehUsuarioLogado &&
                <Route {...rest} path={path} component={component}>
                    {children}
                </Route>
            }
        </>
    );
};

export default RotaProtegida;
