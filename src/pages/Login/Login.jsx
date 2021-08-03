import React from "react";
import {Typography} from "@material-ui/core";

import estilos from "./Login.module.css";
import CampoDeTexto from "../../shared/components/CampoDeTexto/CampoDeTexto";
import {BotaoPrincipal} from "../../@material/Button";
import useForm from "../../shared/hooks/useForm";
import LoginModelo from "../../shared/models/Login";
import Formulario from "../../shared/components/Formulario/Formulario";

const Login = () => {
    const {atualizaValor, valores} = useForm(LoginModelo.valoresIniciais());

    return (
        <div className={estilos.login__container}>
            <article className={estilos.login__card}>
                <Typography className={estilos.login__titulo} variant="h5">Entrar</Typography>
                <Formulario
                    className={estilos.login__formulario}
                    // alteraServico={MarcaService.alterar}
                    // cadastroServico={MarcaService.cadastrar}
                    ehValido={LoginModelo.ehModeloValido(valores)}
                    valores={valores}
                >
                    <CampoDeTexto
                        id="email"
                        name="email"
                        label="Email"
                        required={true}
                        value={valores?.email || ""}
                        onChange={atualizaValor}
                        error={LoginModelo.validacoesEmail(valores?.email)}
                    />

                    <CampoDeTexto
                        name="senha"
                        label="Senha"
                        required={true}
                        type="password"
                        value={valores?.senha || ""}
                        onChange={atualizaValor}
                    />

                    <BotaoPrincipal disabled={LoginModelo.ehModeloValido(valores)}>
                        Entrar
                    </BotaoPrincipal>
                </Formulario>
            </article>
        </div>
    );
};

export default Login;
