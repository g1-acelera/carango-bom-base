import React from "react";
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import MENU_ITEM from "./constants/menu-item.const";
import sidebarStyles from "../../../@material/Sidebar";
import {NavLink} from "react-router-dom";

const MenuLateralItem = () => {
    const classes = sidebarStyles();

    return (
        <>
            <div className={classes.toolbar}>
                <h1 className="principal700-fg titulo">Carango bom</h1>
            </div>
            <Divider/>
            <List>
                {MENU_ITEM.map((item, index) => (
                    <NavLink to={item.url} key={index} activeClassName="ativo">
                        <ListItem button key={item.nome} to={item.url} key={index}>
                            <ListItemIcon>{item.icone}</ListItemIcon>
                            <ListItemText primary={item.nome}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </>
    );
};

export default MenuLateralItem;
