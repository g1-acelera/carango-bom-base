import React, { useState, useEffect, useMemo } from "react"
import {useHistory} from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
import {fabStyles} from '../../@material/Button';
import {Fab} from '@material-ui/core';

import ROTAS from "../../shared/constants/rotas.const"
import {useAutenticacaoContext} from "../../shared/context/autenticacao.context";
import VeiculoService from "../../services/VeiculoService"
import Tabela from "../../shared/components/Tabela/Tabela"

export default function ListagemVeiculos() {
  const [veiculos, setVeiculos] = useState([])
  const {ehUsuarioLogado} = useAutenticacaoContext();
  const history = useHistory();
  const classes = fabStyles();

  const colunas = useMemo(
    () => [
      {
        header: "Modelo",
        accessor: "nome",
      },
      {
        header: "Marca",
        accessor: "marca.nome",
      },
      {
        header: "Ano",
        accessor: "ano",
      },
      {
        header: "Valor",
        accessor: "valor",
        type: "currency"
      },
    ],
    []
  )

  useEffect(() => carregarVeiculos(), [])

  function carregarVeiculos() {
    VeiculoService.listar().then((result) => setVeiculos(result))
  }

  return (
    <div>
      <Tabela 
        columns={colunas} 
        data={veiculos}
        colunaDeAcoes={ehUsuarioLogado? true : false}
        service={VeiculoService}
        caminhoDoObjeto="/veiculos"
      />
      <Fab 
        color="primary" aria-label="add" className={classes.fab} onClick={() => history.push(ROTAS.CADASTRO_VEICULO)}>
        <AddIcon/>
      </Fab>
    </div>
  )
}
