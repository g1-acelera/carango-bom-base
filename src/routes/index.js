import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import ROTAS from "../shared/constants/rotas.const";

const CadastroMarca = lazy(() => import("../pages/cadastro-marca/CadastroMarca"));
const ListagemMarcas = lazy(() => import("../pages/listagem-marca/ListagemMarcas"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                <Route path={ROTAS.CADASTRO_MARCA} component={CadastroMarca}/>
                <Route path={ROTAS.ALTERACAO_MARCA} component={CadastroMarca}/>
                <Route path={ROTAS.MARCAS} component={ListagemMarcas}/>
            </Switch>
        </Suspense>
    );
}
