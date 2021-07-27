import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import ROTAS from "../shared/constants/rotas.const";

const Navegacao = lazy(() => import("../pages/MenuLateralContainer/MenuLateralContainer"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                {/*Menu lateral*/}
                <Route path={ROTAS.INICIAL} extact component={Navegacao}/>
            </Switch>
        </Suspense>
    );
}
