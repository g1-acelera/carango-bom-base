import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";
import MenuLateral from "../../shared/components/menu-lateral/MenuLateral";
import ROTAS from "../../shared/constants/rotas.const";

const CadastroMarca = lazy(() => import("../../pages/cadastro-marca/CadastroMarca"));
const ListagemMarcas = lazy(() => import("../../pages/listagem-marca/ListagemMarcas"));

const MenuLateralContainer = () => {
    return (
        <>
            <MenuLateral>
                <Switch>
                    <Route path={ROTAS.CADASTRO_MARCA} component={CadastroMarca}/>
                    <Route path={ROTAS.ALTERACAO_MARCA} component={CadastroMarca}/>
                    <Route path={ROTAS.MARCAS} component={ListagemMarcas}/>
                </Switch>
            </MenuLateral>
        </>
    );
};

export default MenuLateralContainer;
