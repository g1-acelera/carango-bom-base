import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import ROTAS from "../shared/constants/rotas.const";
import AutenticacaoProvider from "../shared/context/autenticacao.context";

const Navegacao = lazy(() => import("../pages/MenuLateralContainer/MenuLateralContainer"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <AutenticacaoProvider>
                <Switch>
                    <Route path={ROTAS.INICIAL} extact component={Navegacao}/>
                </Switch>
            </AutenticacaoProvider>
        </Suspense>
    );
}
