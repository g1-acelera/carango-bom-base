import AddIcon from '@material-ui/icons/Add';
import {DataGrid} from '@material-ui/data-grid';
import {Button, Fab} from '@material-ui/core';

import {useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import MarcaService from '../../services/MarcaService';

import {fabStyles} from '../../@material/Button';

const colunas = [
    {field: 'nome', headerName: 'Marca', width: 200}
];

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState();
    const classes = fabStyles();
    const history = useHistory();

    function alterar() {
        history.push('/alteracao-marca/' + marcaSelecionada.id);
    }

    function excluir() {
        MarcaService.excluir(marcaSelecionada)
            .then(() => {
                setMarcaSelecionada(null);
                carregarMarcas();
            });
    }

    useEffect(() => carregarMarcas(), []);

    function carregarMarcas() {
        MarcaService.listar()
            .then(dados => setMarcas(dados));
    }

    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid rows={marcas} columns={colunas}
                      onCellClick={gridSelection => {
                          setMarcaSelecionada(gridSelection.row)
                      }}
            />

            <div className={classes.actionsToolbar}>
                <Button
                    className={classes.actions}
                    variant="contained"
                    color="secondary"
                    disabled={!marcaSelecionada}
                    onClick={() => excluir()}>
                    Excluir
                </Button>
                <Button
                    className={classes.actions}
                    variant="contained"
                    color="primary"
                    disabled={!marcaSelecionada}
                    onClick={() => alterar()}>
                    Alterar
                </Button>
            </div>

            <Fab color="primary" aria-label="add" className={classes.fab}
                 onClick={() => history.push('/cadastro-marca')}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

export default ListagemMarcas;