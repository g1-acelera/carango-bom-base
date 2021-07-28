import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {BotaoEntrar, BotaoSair} from "../../../@material/Button";
import sidebarStyles from "../../../@material/Sidebar";
import {useAutenticacaoContext} from "../../context/autenticacao.context";

const MenuSuperior = ({menuClick}) => {
    const {ehUsuarioLogado} = useAutenticacaoContext();
    const classes = sidebarStyles();

    return (
        <>
            <AppBar position="fixed" className={`${classes.appBar}`}>
                <Toolbar className="f-space-between">
                    <div>
                        <IconButton
                            data-testid="botao-menu"
                            color="inherit"
                            aria-label="Abrir menu"
                            edge="start"
                            onClick={() => menuClick()}
                            className={classes.menuButton}
                        >
                            <Menu/>
                        </IconButton>
                    </div>
                    { !ehUsuarioLogado &&
                    <BotaoEntrar data-testid="botao-entrar">
                        Entrar
                    </BotaoEntrar> }
                    { ehUsuarioLogado &&
                    <BotaoSair data-testid="botao-sair">
                        Sair
                    </BotaoSair> }
                </Toolbar>
            </AppBar>
        </>
    );
}

export default MenuSuperior;
