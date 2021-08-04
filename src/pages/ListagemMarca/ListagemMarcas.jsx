import AddIcon from '@material-ui/icons/Add';
import {DataGrid} from '@material-ui/data-grid';
import {Button, Fab, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import MarcaService from '../../services/MarcaService';
import {fabStyles} from '../../@material/Button';
import ROTAS from "../../shared/constants/rotas.const";

const colunas = [
    {field: "nome", headerName: "Marca"},
    {
        field: "",
        headerName: "Editar",
        sortable: false,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            const onClick = () => {
                console.log(params.row)
            };

            return <IconButton aria-label="delete" onClick={onClick}><DeleteIcon/></IconButton>
        }
    },
];

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState();
    const classes = fabStyles();
    const history = useHistory();

    function alterar() {
        if (marcaSelecionada)
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
        <div>
            <DataGrid style={{flexGrow: 1}} autoHeight={true} rows={marcas} columns={colunas}
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
                 onClick={() => history.push(ROTAS.CADASTRO_MARCA)}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

export default ListagemMarcas;