import React, {useEffect} from 'react';

import Marca from "../../shared/models/Marca";
import useForm from "../../shared/hooks/useForm";
import CampoDeTexto from '../../shared/components/campo-de-texto/CampoDeTexto'
import MarcaService from "../../services/MarcaService";
import BotaoDetalhes from "../../shared/components/botao-detalhes/BotaoDetalhes";
import Formulario from "../../shared/components/formulario/Formulario";
import useConsultaEntidade from "../../shared/hooks/useConsultaEntidade";

function CadastroMarca() {
    const {atualizaValor, valores, setValores} = useForm(Marca.initialValues());
    const {dadosConsultados} = useConsultaEntidade(MarcaService.consultar);

    useEffect(() => setValores(dadosConsultados), [dadosConsultados, setValores]);

    return (
        <Formulario
            alteraServico={MarcaService.alterar}
            cadastroServico={MarcaService.cadastrar}
            ehValido={Marca.ehModeloValido()}
            valores={valores}
        >
            <CampoDeTexto
                id="marca-nome"
                name="nome"
                label="Marca"
                value={valores?.nome || ""}
                error={Marca.validacoesNome(valores?.nome)}
                required={true}
                onChange={atualizaValor}
            />
            <BotaoDetalhes
                consultarServico={MarcaService.consultar}
                salvarDesabilidato={Marca.ehModeloValido(valores)}
            />
        </Formulario>
    );
}

export default CadastroMarca;