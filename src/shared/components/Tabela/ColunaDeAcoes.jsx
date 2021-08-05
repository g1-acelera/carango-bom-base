import {React, useState} from 'react'
import {useHistory} from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog';
import {Button} from "@material-ui/core"
import TableCell from "@material-ui/core/TableCell"
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core/styles"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const buttonStyles = makeStyles((theme) => ({
    rightButton: {
      marginLeft: theme.spacing(1)
    },
  }))

export default function ColunaDeAcoes({object_id, service, caminhoDoObjeto}) {
    const history = useHistory()
    const [open, setOpen] = useState(false)

    const alterar = (id) => {
        history.push(caminhoDoObjeto + "/" + id)
    }

    const excluir = (id) => {
        service.excluir(id)
            .then(() => {history.go(0)})
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    const styles = buttonStyles()

    return (
        <>
            <TableCell>
                    <Button
                        className=""
                        id="1-botao-excluir"
                        data-testid="botao-excluir"
                        variant="contained"
                        color="secondary"
                        onClick={() => handleClickOpen()}>
                        Excluir
                    </Button>
                    <Button
                        className={styles.rightButton}
                        data-testid="botao-alterar"
                        variant="contained"
                        color="primary"
                        onClick={() => alterar(object_id)}>
                        Alterar
                    </Button>
            </TableCell>
                <Dialog
                    open={open}
                    onClose={handleClose}
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
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => excluir(object_id)} color="primary">
                    Excluir
                </Button>
                </DialogActions>
                </Dialog>
        </>
        )
}   