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

function CadastroVeiculo() {

  const {atualizaValor, valores, setValores} = useForm(Veiculo.initialValues());
  const {dadosConsultados} = useConsultaEntidade(VeiculoService.consultar);
  const [value,
    setValue] = React.useState(0);
  const isValid = value > 0;

  useEffect(() => setValores(dadosConsultados), [dadosConsultados, setValores]);

  return (
    <h1>Cadastrar Veículo
      <Formulario
        cadastroServico={VeiculoService.cadastrar}
        alteraServico={VeiculoService.alterar}
        ehValido={Veiculo.ehVeiculoValido()}
        valores={valores}>

        <CampoDeTexto
          id="veiculo-modelo"
          name="modelo"
          label="Modelo"
          value={valores
          ?.modelo || ""}
          error={Veiculo.validacoesNome(valores
          ?.modelo)}
          required={true}
          onChange={atualizaValor}/>

        <CampoDeValor
          currencySymbol='R$'
          isValid={isValid}
          digitGroupSeparator='.'
          decimalCharacter=','
          id="veiculo-valor"
          name="valor"
          value={valores
            ?.valor || ""}
          label="Valor"
          currencySymbol="R$"
          onChange={atualizaValor}
          minimumValue={"0"}
          decimalCharacter=","
          digitGroupSeparator="."
          isValid={isValid}
          required={true}/>

        <CampoDeTexto
          id="veiculo-ano"
          name="ano"
          label="Ano"
          value={valores
          ?.ano || ""}
          error={Veiculo.validacoesNome(valores
          ?.ano)}
          required={true}
          onChange={atualizaValor}/>

        <CampoDeSelecao
          id="veiculo-marca-id"
          name="marcaId"
          value={valores
          ?.marcaId || ""}
          label="Marca"
          onChange={atualizaValor}></CampoDeSelecao>

        <BotaoDetalhes
          consultarServico={VeiculoService.consultar}
          salvarDesabilidato={Veiculo.ehVeiculoValido(valores)}/>
      </Formulario>
    </h1>
  );

}

export default CadastroVeiculo;