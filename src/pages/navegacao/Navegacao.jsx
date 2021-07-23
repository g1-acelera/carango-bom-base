import React from "react";
import {Route, Switch} from "react-router-dom";
import Marcas from "../marcas/Marcas";

const Navegacao = () => {
    return (
        <>
            TESTE
            <Switch>
                <Route path="/marcas" component={Marcas}/>
            </Switch>
        </>
    );
};

export default Navegacao;
