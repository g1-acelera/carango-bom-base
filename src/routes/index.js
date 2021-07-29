import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";

const CadastroMarca = lazy(() => import("../pages/cadastro-marca/CadastroMarca"));
const ListagemMarcas = lazy(() => import("../pages/listagem-marca/ListagemMarcas"));
const ListagemVeiculos = lazy(() => import("../pages/ListagemVeiculos/ListagemVeiculos"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                <Route path="/cadastro-marca" component={CadastroMarca}/>
                <Route path='/alteracao-marca/:id' component={CadastroMarca}/>
                <Route path="/veiculos" component={ListagemVeiculos}/>
                <Route exact path="/" component={ListagemMarcas}/>
            </Switch>
        </Suspense>
    );
}
