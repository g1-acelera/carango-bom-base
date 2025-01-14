import {React, useState} from 'react'
import {useHistory} from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog';
import TableCell from "@material-ui/core/TableCell"
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {Button, IconButton} from "@material-ui/core"
import {DeleteOutlineOutlined, EditOutlined} from '@material-ui/icons'

export default function ColunaDeAcoes({object_id, service, caminhoDoObjeto}) {
    const history = useHistory()
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [openErroDialog, setOpenErroDialog] = useState(false)

    const alterar = (id) => {
        history.push(caminhoDoObjeto + "/" + id)
    }

    const excluir = (id) => {
        service.excluir(id)
            .then((response) => {
                if (response.ok === false) {
                    fecharDeleteDialog();
                    abrirErroDialog();
                    return;
                }
                history.go(0)
            })
    }

    const abrirDeleteDialog = (abrirDialog) => {
        setOpenDeleteDialog(true);
    };

    const fecharDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const abrirErroDialog = () => {
        setOpenErroDialog(true);
    };

    const fecharErroDialog = () => {
        setOpenErroDialog(false);
    };

    return (
        <>
        <TableCell>
            <IconButton
                data-testid="botao-alterar"
                variant="contained"
                color="primary"
                onClick={() => alterar(object_id)}>
                <EditOutlined color="secondary"/>
            </IconButton>
            <IconButton
                data-testid="botao-excluir"
                variant="contained"
                color="secondary"
                onClick={() => abrirDeleteDialog()}>
                <DeleteOutlineOutlined color="error"/>
            </IconButton>
        </TableCell>
        <Dialog
            data-testid="dialogo-excluir"
            open={openDeleteDialog}
            onClose={fecharDeleteDialog}
            aria-labelledby="draggable-dialog-title"
        >   
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Cuidado
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Tem certeza que quer excluir este registro?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={fecharDeleteDialog} color="primary">
                    Cancelar
                </Button>
                <Button data-testid="botao-confirmar" onClick={() => excluir(object_id)} color="primary">
                    Excluir
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            open={openErroDialog}
            onClose={fecharErroDialog}
            aria-labelledby="draggable-dialog-title"
        >   
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Erro
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Não é possível deletar esta Marca
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={fecharErroDialog} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}   