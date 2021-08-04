import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {BotaoEntrar, BotaoSair} from "../../../@material/Button";
import SidebarStyles from "../../../@material/SidebarStyles";
import {useAutenticacaoContext} from "../../context/autenticacao.context";
import {useHistory} from "react-router";
import ROTAS from "../../constants/rotas.const";

const MenuSuperior = ({menuClick}) => {
    const history = useHistory();
    const {ehUsuarioLogado, removeDadosUsuario} = useAutenticacaoContext();
    const classes = sidebarStyles();

    function navegaParaLogin() {
        history.push(ROTAS.LOGIN);
    }

    return (
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
                {
                    !ehUsuarioLogado &&
                    <BotaoEntrar onClick={navegaParaLogin} data-testid="botao-entrar">
                        Entrar
                    </BotaoEntrar>
                }
                {
                    ehUsuarioLogado &&
                    <BotaoSair onClick={removeDadosUsuario} data-testid="botao-sair">
                        Sair
                    </BotaoSair>
                }
            </Toolbar>
        </AppBar>
    );
}

export default MenuSuperior;
