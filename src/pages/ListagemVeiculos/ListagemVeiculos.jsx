import React, {useMemo} from "react"
import AddIcon from '@material-ui/icons/Add';
import {fabStyles} from '../../@material/Button';
import {Box, Fab} from '@material-ui/core';

import {useAutenticacaoContext} from "../../shared/context/autenticacao.context";
import VeiculoService from "../../services/VeiculoService"
import Tabela from "../../shared/components/Tabela/Tabela"
import {useHistory} from 'react-router-dom';
import ROTAS from "../../shared/constants/rotas.const";
import useListarEntidade from "../../shared/hooks/useListarEntidade";

function ListagemVeiculos() {
    const {dadosConsultados} = useListarEntidade(VeiculoService.listar);
    const {ehUsuarioLogado} = useAutenticacaoContext();
    const classes = fabStyles();
    const history = useHistory();

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

    return (
        <Box data-testid="telaListagem">
            <Tabela
                columns={colunas}
                data={dadosConsultados}
                colunaDeAcoes={ehUsuarioLogado}
                service={VeiculoService}
                caminhoDoObjeto="/alteracao-veiculo"
            />
            { 
                ehUsuarioLogado ?
                <Fab data-testid="fab-AddVeiculo" color="primary" aria-label="Adicionar veículo" className={classes.fab}
                     onClick={() => history.push(ROTAS.CADASTRO_VEICULO)}>
                    <AddIcon/>
                </Fab> : " "
            }
        </Box>
    )
}

export default ListagemVeiculos;
