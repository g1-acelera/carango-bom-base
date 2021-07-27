import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {BotaoEntrar} from "../../../@material/Button";
import sidebarStyles from "../../../@material/Sidebar";

const MenuSuperior = ({menuClick}) => {
    const classes = sidebarStyles();

    return (
        <AppBar position="fixed" className={`${classes.appBar}`}>
            <Toolbar className="f-space-between">
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="Abrir menu"
                        edge="start"
                        onClick={() => menuClick()}
                        className={classes.menuButton}
                    >
                        <Menu/>
                    </IconButton>
                </div>
                <BotaoEntrar>
                    Entrar
                </BotaoEntrar>
            </Toolbar>
        </AppBar>
    );
}

export default MenuSuperior;
