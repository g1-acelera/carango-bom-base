import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";
import MenuLateral from "../../shared/components/Menu/MenuLateral";
import ROTAS from "../../shared/constants/rotas.const";
import {Redirect} from "react-router";
import RotaProtegida from "../../routes/RotaProtegida";

const CadastroMarca = lazy(() => import("../CadastroMarca/CadastroMarca"));
const ListagemMarcas = lazy(() => import("../ListagemMarca/ListagemMarcas"));
const ListagemVeiculos = lazy(() => import("../ListagemVeiculos/ListagemVeiculos"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));

const MenuLateralContainer = () => {
    return (
        <>
            <MenuLateral>
                <Switch>
                    <RotaProtegida exact path={ROTAS.INICIAL}>
                        <Redirect to={ROTAS.DASHBOARD}/>
                    </RotaProtegida>
                    <RotaProtegida path={ROTAS.DASHBOARD} component={Dashboard}/>
                    <RotaProtegida path={ROTAS.CADASTRO_MARCA} component={CadastroMarca}/>
                    <RotaProtegida path={ROTAS.ALTERACAO_MARCA} component={CadastroMarca}/>
                    <RotaProtegida path={ROTAS.MARCAS} component={ListagemMarcas}/>
                    <Route path={ROTAS.VEICULOS} component={ListagemVeiculos}/>
                </Switch>
            </MenuLateral>
        </>
    );
};

export default MenuLateralContainer;
