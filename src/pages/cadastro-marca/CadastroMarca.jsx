import React from 'react';

import Marca from "./Marca";
import useForm from "../../shared/hooks/useForm";
import CampoDeTexto from '../../shared/components/campo-de-texto/CampoDeTexto'
import MarcaService from "../../services/MarcaService";
import BotaoDetalhes from "../../shared/components/botao-detalhes/BotaoDetalhes";

function CadastroMarca() {
    const {atualizaValor, valores, setValores} = useForm(Marca.initialValues());

    return (
        <form data-testid="form" onSubmit={(event) => {
            event.preventDefault();
            // if (possoEnviar()) {
            //     if (id) {
            //         MarcaService.alterar({ id, nome: marca })
            //             .then(res => {
            //                 history.goBack();
            //             });
            //     } else {
            //         MarcaService.cadastrar({ nome: marca })
            //             .then(res => {
            //                 setMarca("");
            //                 history.goBack();
            //             });
            //     }
            // }
        }}>
            <CampoDeTexto
                id="marca-nome"
                name="nome"
                label="Marca"
                value={valores.nome}
                error={Marca.validacoesNome(valores.nome)}
                required={true}
                onChange={atualizaValor}
            />
            <BotaoDetalhes
                consultarServico={MarcaService.consultar}
                dadosConsultados={(dados) => setValores(dados)}
                salvarDesabilidato={Marca.ehModeloValido(valores)}
            />
        </form>
    );
}

export default CadastroMarca;