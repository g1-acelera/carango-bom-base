import React, { useState, useEffect, useMemo } from "react"
import {useAutenticacaoContext} from "../../shared/context/autenticacao.context";
import VeiculoService from "../../services/VeiculoService"
import Tabela from "../../shared/components/Tabela/Tabela"

export default function ListagemVeiculos() {
  const [veiculos, setVeiculos] = useState([])
  const {ehUsuarioLogado} = useAutenticacaoContext();
  const deveTerColunaDeAcoes = ehUsuarioLogado? true : false;

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
    <Tabela 
      columns={colunas} 
      data={veiculos}
      colunaDeAcoes={deveTerColunaDeAcoes}
      service={VeiculoService}
      caminhoDoObjeto="/alteracao-veiculo"
    />
  )
}
