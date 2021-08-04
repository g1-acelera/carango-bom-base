import React from "react";
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import MENU_ITEM from "./constants/menu-item.const";
import SidebarStyles from "../../../@material/SidebarStyles";
import {NavLink} from "react-router-dom";

const MenuLateralItem = () => {
    const classes = SidebarStyles();

    return (
        <>
            <div className={classes.toolbar}>
                <h1 className="principal700-fg titulo">Carango bom</h1>
            </div>
            <Divider/>
            <List>
                {MENU_ITEM.map((item, index) => (
                    <NavLink to={item.url} key={index} activeClassName="ativo">
                        <ListItem button to={item.url}>
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
