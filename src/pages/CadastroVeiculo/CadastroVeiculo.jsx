import React, {useEffect, useState} from 'react';
import VeiculoService from "../../services/VeiculoService";
import MarcaService from '../../services/MarcaService';
import Veiculo from "../../shared/models/Veiculo";
import {useHistory} from "react-router-dom";
import Formulario from "../../shared/components/Formulario/Formulario";
import useForm from "../../shared/hooks/useForm";

import useConsultaEntidade from "../../shared/hooks/useConsultaEntidade";

import CampoDeTexto from '../../shared/components/CampoDeTexto/CampoDeTexto';
import CampoDeValor from '../../shared/components/CampoDeValor/CampoDeValor';
import CampoDeSelecao from '../../shared/components/CampoDeSelecao/CampoDeSelecao';
import BotaoDetalhes from "../../shared/components/BotaoDetalhes/BotaoDetalhes";
import TextField from '@material-ui/core/TextField';
import ROTAS from "../../shared/constants/rotas.const";

function CadastroVeiculo() {
  const {atualizaValor, valores, setValores} = useForm(Veiculo.initialValues());
  const {dadosConsultados} = useConsultaEntidade(VeiculoService.consultar);
  const [marcas,
    setMarcas] = useState();

  const title = useHistory().location.pathname === ROTAS.CADASTRO_VEICULO
    ? "Cadastro Veículo"
    : "Alterar Veículo";

  useEffect(() => {
    setValores(dadosConsultados);

    MarcaService
      .listar()
      .then(dados => {
        setMarcas(dados)
      });

    if (dadosConsultados !== undefined) {
      dadosConsultados.marcaId = dadosConsultados.marca.id;
    }
  }, [dadosConsultados, setValores]);

  return (
    <div id="cadastro-veiculo-screen">

      <h1>{title}</h1>
      <Formulario
        cadastroServico={VeiculoService.cadastrar}
        alteraServico={VeiculoService.alterar}
        ehValido={Veiculo.ehVeiculoValido(valores)}
        valores={valores}>

        <CampoDeTexto
          id="veiculo-modelo"
          name="nome"
          label="Modelo"
          value={valores
          ?.nome || ""}
          required={true}
          onChange={atualizaValor}/>

        <TextField
          value={valores
          ?.valor}
          onChange={atualizaValor}
          name="valor"
          data-testid="veiculo-valor-text-field"
          id="formatted-numberformat-input"
          InputProps={{
          inputComponent: CampoDeValor
        }}
          variant="outlined"
          label="Valor"
          required={true}
          fullWidth/>

        <CampoDeTexto
          id="veiculo-ano"
          name="ano"
          label="Ano"
          value={valores
          ?.ano || ""}
          required={true}
          onChange={atualizaValor}/>

        <CampoDeSelecao
          id="veiculo-marca-id"
          name="marcaId"
          value={valores
          ?.marcaId || ""}
          label="Marca"
          fullWidth
          onChange={atualizaValor}
          dados={marcas}/>

        <BotaoDetalhes salvarDesabilitado={!Veiculo.ehVeiculoValido(valores)}/>
      </Formulario>
    </div>
  );

}

export default CadastroVeiculo;