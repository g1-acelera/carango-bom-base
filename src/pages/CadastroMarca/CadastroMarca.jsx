import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import Marca from "../../shared/models/Marca";
import useForm from "../../shared/hooks/useForm";
import CampoDeTexto from '../../shared/components/CampoDeTexto/CampoDeTexto'
import MarcaService from "../../services/MarcaService";
import BotaoDetalhes from "../../shared/components/BotaoDetalhes/BotaoDetalhes";
import Formulario from "../../shared/components/Formulario/Formulario";
import useConsultaEntidade from "../../shared/hooks/useConsultaEntidade";

import ROTAS from "../../shared/constants/rotas.const";

function CadastroMarca() {
  const {atualizaValor, valores, setValores} = useForm(Marca.initialValues());
  const {dadosConsultados} = useConsultaEntidade(MarcaService.consultar);

  const title = useHistory().location.pathname === ROTAS.CADASTRO_MARCA
    ? "Cadastrar Marca"
    : "Alterar Marca";

  useEffect(() => setValores(dadosConsultados), [dadosConsultados, setValores]);

  return (
    <div style={{
      minWidth: "40%"
    }}>
      <h1>{title}</h1>
      <Formulario
        alteraServico={MarcaService.alterar}
        cadastroServico={MarcaService.cadastrar}
        ehValido={Marca.ehModeloValido(valores)}
        valores={valores}>
        <CampoDeTexto
          id="marca-nome"
          name="nome"
          label="Marca"
          value={valores
          ?.nome || ""}
          required={true}
          onChange={atualizaValor}/>
        <BotaoDetalhes salvarDesabilitado={!Marca.ehModeloValido(valores)}/>
      </Formulario>
    </div>
  );
}

export default CadastroMarca;