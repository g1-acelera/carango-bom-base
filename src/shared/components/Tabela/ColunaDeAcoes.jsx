import React from 'react'

import TableCell from "@material-ui/core/TableCell"
import {Button} from '@material-ui/core';

export default function ColunaDeAcoes() {
    return (
        <TableCell>
            <div className="">
                <Button
                    className=""
                    variant="contained"
                    color="secondary"
                    onClick="">
                    Excluir
                </Button>
                <Button
                    className=""
                    variant="contained"
                    color="primary"
                    onClick="">
                    Alterar
                </Button>
            </div>
        </TableCell>
        )
}   