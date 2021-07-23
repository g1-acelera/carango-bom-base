import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import ROTAS from "../shared/constants/rotas.const";

const Navegacao = lazy(() => import("../pages/navegacao/Navegacao"));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                {/*Menu lateral*/}
                <Route path={ROTAS.INICIAL} component={Navegacao}/>
            </Switch>
        </Suspense>
    );
}
