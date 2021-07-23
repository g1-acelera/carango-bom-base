import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";

const CadastroMarca = lazy(() => import("../pages/cadastro-marca/CadastroMarca"));
const ListagemMarcas = lazy(() => import("../pages/listagem-marca/ListagemMarcas"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                <Route path="/cadastro-marca" component={CadastroMarca}/>
                <Route path='/alteracao-marca/:id' component={CadastroMarca}/>
                <Route path="/" component={ListagemMarcas}/>
            </Switch>
        </Suspense>
    );
}
