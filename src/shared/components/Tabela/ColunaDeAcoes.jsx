import React from 'react'
import {useHistory} from 'react-router-dom'

import {Button} from '@material-ui/core'
import TableCell from "@material-ui/core/TableCell"

export default function ColunaDeAcoes({object_id, service, caminhoDoObjeto}) {
    const history = useHistory();

    function alterar(id) {
        history.push(caminhoDoObjeto + "/" + id)
    }

    function excluir(id) {
        service.excluir(id)
            .then(() => {history.go(0)})
    }

    return (
        <TableCell>
                <Button
                    className=""
                    id="1-botao-excluir"
                    data-testid="botao-excluir"
                    variant="contained"
                    color="secondary"
                    onClick={() => excluir(object_id)}>
                    Excluir
                </Button>
                <Button
                    className=""
                    data-testid="botao-alterar"
                    variant="contained"
                    color="primary"
                    onClick={() => alterar(object_id)}>
                    Alterar
                </Button>
        </TableCell>
        )
}   