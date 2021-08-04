import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";

import ROTAS from "../shared/constants/rotas.const";
import AutenticacaoProvider from "../shared/context/autenticacao.context";
import MenuLateralContainer from "../pages/MenuLateralContainer/MenuLateralContainer";

const Login = lazy(() => import("../pages/Login/Login"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <AutenticacaoProvider>
                <Switch>
                    <Route path={ROTAS.LOGIN} component={Login}/>
                    <MenuLateralContainer/>
                </Switch>
            </AutenticacaoProvider>
        </Suspense>
    );
}
