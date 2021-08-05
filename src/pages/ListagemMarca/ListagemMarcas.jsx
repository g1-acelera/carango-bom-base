import React, {useEffect, useState, useMemo} from 'react';
import {useHistory} from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
import {fabStyles} from '../../@material/Button';
import MarcaService from '../../services/MarcaService';
import {Fab} from '@material-ui/core';

import ROTAS from "../../shared/constants/rotas.const"
import Tabela from "../../shared/components/Tabela/Tabela"
import {useAutenticacaoContext} from "../../shared/context/autenticacao.context";

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const {ehUsuarioLogado} = useAutenticacaoContext();
    const history = useHistory();
    const classes = fabStyles();

    const colunas = useMemo(
        () => [
            {
                header: "Marca",
                accessor: "nome",
            },
        ],
        []
    )

    useEffect(() => carregarMarcas(), []);

    function carregarMarcas() {
        MarcaService.listar()
            .then(dados => setMarcas(dados));
    }

    return (
        <div data-testid="telaMarcaListagem">
            <Tabela 
                columns={colunas} 
                data={marcas}
                colunaDeAcoes={ehUsuarioLogado? true : false}
                service={MarcaService}
                caminhoDoObjeto="/alteracao-marca"
            />
            <Fab id="fab-AddMarca" data-testid="fab-AddMarca" color="primary" aria-label="add" className={classes.fab}
                 onClick={() => history.push(ROTAS.CADASTRO_MARCA)}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

export default ListagemMarcas;
