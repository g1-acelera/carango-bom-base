import React, {useState} from "react";
import {Snackbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import estilos from "./Login.module.css";
import CampoDeTexto from "../../shared/components/CampoDeTexto/CampoDeTexto";
import {BotaoPrincipal} from "../../@material/Button";
import useForm from "../../shared/hooks/useForm";
import LoginModelo from "../../shared/models/Login";
import LoginService from "../../services/LoginService";
import {useAutenticacaoContext} from "../../shared/context/autenticacao.context";
import ROTAS from "../../shared/constants/rotas.const";
import Alert from "../../shared/components/Alert/Alert";

const Login = () => {
    const [snackbarAberto, setSnackbarAberto] = useState(false);
    const history = useHistory();
    const {adicionaDadosUsuario} = useAutenticacaoContext();
    const {atualizaValor, valores} = useForm(LoginModelo.valoresIniciais());

    async function login(event) {
        event.preventDefault();
        LoginService.login(valores)
            .then(res => {
                adicionaDadosUsuario(res);
                history.push(ROTAS.DASHBOARD);
            })
            .catch(() => setSnackbarAberto(true));
    }

    return (
        <>
            <div className={estilos.login__container}>
                <article className={estilos.login__card}>
                    <Typography className={estilos.login__titulo} variant="h5" data-testid="titulo">Entrar</Typography>
                    <form
                        className={estilos.login__formulario}
                        onSubmit={login}
                    >
                        <CampoDeTexto
                            id="email"
                            name="email"
                            label="Email"
                            required={true}
                            value={valores?.email || ""}
                            onChange={atualizaValor}
                        />

                        <CampoDeTexto
                            name="senha"
                            label="Senha"
                            required={true}
                            type="password"
                            value={valores?.senha || ""}
                            onChange={atualizaValor}
                        />

                        <BotaoPrincipal type="submit" data-testid="botao-entrar">
                            Entrar
                        </BotaoPrincipal>
                    </form>
                </article>
            </div>
            <Snackbar open={snackbarAberto} autoHideDuration={6000} onClose={() => setSnackbarAberto(false)}>
                <Alert severity="error">
                    Email/senha incorretos
                </Alert>
            </Snackbar>
        </>
    );
};

export default Login;
