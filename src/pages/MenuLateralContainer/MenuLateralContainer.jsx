import React, {lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import MenuLateral from "../../shared/components/Menu/MenuLateral";
import ROTAS from "../../shared/constants/rotas.const";
import RotaProtegida from "../../routes/RotaProtegida";

const CadastroMarca = lazy(() => import("../CadastroMarca/CadastroMarca"));
const CadastroVeiculo = lazy(() => import("../CadastroVeiculo/CadastroVeiculo"));
const ListagemMarcas = lazy(() => import("../ListagemMarca/ListagemMarcas"));
const ListagemVeiculos = lazy(() => import("../ListagemVeiculos/ListagemVeiculos"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const PaginaNaoEncontrada = lazy(() => import("../PaginaNaoEncontrada/PaginaNaoEncontrada"));
const ListagemUsuarios = lazy(() => import("../ListagemUsuarios/ListagemUsuarios"));
const CadastroUsuario = lazy(() => import("../CadastroUsuario/CadastroUsuario"));

const MenuLateralContainer = () => {
    return (
        <MenuLateral>
            <Switch>
                <Route path={ROTAS.INICIAL} exact>
                    <Redirect to={ROTAS.DASHBOARD}/>
                </Route>
                <RotaProtegida path={ROTAS.DASHBOARD} component={Dashboard}/>
                <RotaProtegida path={ROTAS.CADASTRO_MARCA} component={CadastroMarca}/>
                <RotaProtegida path={ROTAS.ALTERACAO_MARCA} component={CadastroMarca}/>
                <RotaProtegida path={ROTAS.MARCAS} component={ListagemMarcas}/>
                <RotaProtegida path={ROTAS.CADASTRO_VEICULO} component={CadastroVeiculo}/>
                <RotaProtegida path={ROTAS.ALTERACAO_VEICULO} component={CadastroVeiculo}/>
                <RotaProtegida path={ROTAS.USUARIOS} component={ListagemUsuarios}/>
                <RotaProtegida path={ROTAS.CADASTRO_USUARIO} component={CadastroUsuario}/>
                <RotaProtegida path={ROTAS.ALTERACAO_USUARIO} component={CadastroUsuario}/>
                <Route path={ROTAS.VEICULOS} component={ListagemVeiculos}/>
                <Route path={ROTAS.NAO_ENCONTRADO} exact component={PaginaNaoEncontrada}/>
            </Switch>
        </MenuLateral>
    );
};

export default MenuLateralContainer;
