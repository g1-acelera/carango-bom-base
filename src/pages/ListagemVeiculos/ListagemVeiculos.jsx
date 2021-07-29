import React, {useState, useEffect, useMemo} from 'react'
import VeiculoService from '../../services/VeiculoService'
import Tabela from '../../shared/components/Tabela/Tabela'

export default function ListagemVeiculos() {
    const [veiculos, setVeiculos] = useState([])
    const colunas = useMemo(() => [
                {
                    Header: 'Modelo',
                    accessor: 'nome',
                },
                {
                    Header: 'Marca',
                    accessor: 'marca.nome',
                },
                {
                    Header: 'Ano',
                    accessor: 'ano',
                },
                {
                    Header: 'Valor',
                    accessor: 'valor',
                },
    ],[])
    
    useEffect(() => carregarVeiculos(), [])
    
    function carregarVeiculos() {
        VeiculoService.listar()
        .then((result) => setVeiculos(result))
    }
    
    return (
        <Tabela 
        columns={colunas}
        data={veiculos}
        titulo="Veículos"
        />
    )
}
