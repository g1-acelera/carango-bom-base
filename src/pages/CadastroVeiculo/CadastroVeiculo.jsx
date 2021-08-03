import React, {useEffect} from 'react';
import VeiculoService from "../../services/VeiculoService";
import Veiculo from "../../shared/models/Veiculo";

import Formulario from "../../shared/components/Formulario/Formulario";
import useForm from "../../shared/hooks/useForm";

import useConsultaEntidade from "../../shared/hooks/useConsultaEntidade";

import CampoDeTexto from '../../shared/components/CampoDeTexto/CampoDeTexto';
import CampoDeValor from '../../shared/components/CampoDeValor/CampoDeValor';
import CampoDeSelecao from '../../shared/components/CampoDeSelecao/CampoDeSelecao';
import BotaoDetalhes from "../../shared/components/BotaoDetalhes/BotaoDetalhes";
import TextField from '@material-ui/core/TextField';
import { espacamentos } from '../../@material/CamposDeTexto';

function CadastroVeiculo() {
  const {atualizaValor, valores, setValores} = useForm(Veiculo.initialValues());
  const {dadosConsultados} = useConsultaEntidade(VeiculoService.consultar);

  useEffect(() => setValores(dadosConsultados), [dadosConsultados, setValores]);


  return (
    <h1>Cadastrar Veículo
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
          value={valores?.value}
          onChange={atualizaValor}
          name="valor"
          data-testid="veiculo-valor-text-field"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: CampoDeValor,
          }}
          variant="outlined"
          label="valor"
          required={true}
          fullWidth
          className={espacamentos}
        />

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
          className={espacamentos}></CampoDeSelecao>

        <BotaoDetalhes
          salvarDesabilidato={!Veiculo.ehVeiculoValido(valores)}/>
      </Formulario>
    </h1>
  );

}

export default CadastroVeiculo;