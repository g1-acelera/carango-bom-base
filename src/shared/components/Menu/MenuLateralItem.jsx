import React from "react";
import {Router, useHistory} from "react-router";
import {NavLink} from "react-router-dom";

import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import MENU_ITEM from "./constants/menu-item.const";
import SidebarStyles from "../../../@material/SidebarStyles";
import {NavLink} from "react-router-dom";

const MenuLateralItem = () => {
    const classes = SidebarStyles();

    function itemMenu(item, index) {
        return (
            <Router history={history} key={index}>
                <NavLink to={item.url} activeClassName="ativo">
                    <ListItem button to={item.url} data-testid={item.testeId}>
                        <ListItemIcon>{item.icone}</ListItemIcon>
                        <ListItemText primary={item.nome}/>
                    </ListItem>
                </NavLink>
            </Router>
        );
    }

    function renderizaItens(item, index) {
        if (ehUsuarioLogado) return itemMenu(item, index);
        return !item.autenticadoParaVisualizar ? itemMenu(item, index) : null;
    }

    return (
        <>
            <div className={classes.toolbar}>
                <h1 className="principal700-fg titulo" data-testid="titulo">Carango bom</h1>
            </div>
            <Divider/>
            <List>
                {MENU_ITEM.map((item, index) => renderizaItens(item, index))}
            </List>
        </>
    );
};

export default MenuLateralItem;
