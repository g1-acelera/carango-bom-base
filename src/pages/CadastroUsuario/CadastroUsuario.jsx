import React from "react";
import Formulario from "../../shared/components/Formulario/Formulario";
import CampoDeTexto from "../../shared/components/CampoDeTexto/CampoDeTexto";
import BotaoDetalhes from "../../shared/components/BotaoDetalhes/BotaoDetalhes";
import useForm from "../../shared/hooks/useForm";
import Usuario from "../../shared/models/Usuario";
import UsuarioService from "../../services/UsuarioService";

const CadastroUsuario = () => {
    const {atualizaValor, valores} = useForm(Usuario.initialValues());

    return (
        <div id="cadastro-veiculo-screen">
            <h1>
                Cadastro Usuário
            </h1>

            <Formulario
                cadastroServico={UsuarioService.cadastrar}
                ehValido={Usuario.ehVeiculoValido(valores)}
                valores={valores}>

                <CampoDeTexto
                    name="email"
                    label="Email"
                    value={valores?.email || ""}
                    error={Usuario.validacoesEmail(valores?.email)}
                    required={true}
                    onChange={atualizaValor}/>

                <CampoDeTexto
                    name="senha"
                    label="Senha"
                    type="password"
                    value={valores?.senha || ""}
                    required={true}
                    onChange={atualizaValor}/>

                <BotaoDetalhes salvarDesabilitado={!Usuario.ehVeiculoValido(valores)}/>
            </Formulario>
        </div>
    );
}

export default CadastroUsuario;