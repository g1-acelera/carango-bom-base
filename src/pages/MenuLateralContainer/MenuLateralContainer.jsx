import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";
import MenuLateral from "../../shared/components/Menu/MenuLateral";
import ROTAS from "../../shared/constants/rotas.const";
import RotaProtegida from "../../routes/RotaProtegida";

const CadastroMarca = lazy(() => import("../CadastroMarca/CadastroMarca"));
const ListagemMarcas = lazy(() => import("../ListagemMarca/ListagemMarcas"));
const ListagemVeiculos = lazy(() => import("../ListagemVeiculos/ListagemVeiculos"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const PaginaNaoEncontrada = lazy(() => import("../PaginaNaoEncontrada/PaginaNaoEncontrada"));

const MenuLateralContainer = () => {
    return (
        <MenuLateral>
            <Switch>
                <RotaProtegida exact path={ROTAS.INICIAL} component={Dashboard}/>
                <RotaProtegida path={ROTAS.DASHBOARD} component={Dashboard}/>
                <RotaProtegida path={ROTAS.CADASTRO_MARCA} component={CadastroMarca}/>
                <RotaProtegida path={ROTAS.ALTERACAO_MARCA} component={CadastroMarca}/>
                <RotaProtegida path={ROTAS.MARCAS} component={ListagemMarcas}/>
                <Route path={ROTAS.VEICULOS} component={ListagemVeiculos}/>
                <Route path={ROTAS.NAO_ENCONTRADO} exact component={PaginaNaoEncontrada}/>
            </Switch>
        </MenuLateral>
    );
};

export default MenuLateralContainer;
