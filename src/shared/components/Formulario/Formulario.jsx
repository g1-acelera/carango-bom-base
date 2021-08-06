import {useHistory, useParams} from "react-router";
import Alert from "../Alert/Alert";
import {Snackbar} from "@material-ui/core";
import React, {useState} from "react";

const Formulario = ({children, ehValido, cadastroServico, alteraServico, valores, ...rest}) => {
    const [snackbarAberto, setSnackbarAberto] = useState(false);
    const {id} = useParams();
    const history = useHistory();

    function onSubmit(event) {
        event.preventDefault();
        if (!ehValido) return;
        if (id) {
            alteraServico({...valores}).then(res => history.goBack())
                .catch(() => setSnackbarAberto(true));
            return;
        }
        cadastroServico({...valores}).then(res => history.goBack())
            .catch(() => setSnackbarAberto(true));
    }

    return (
        <>
            <form {...rest} data-testid="form" onSubmit={onSubmit}>
                {children}
            </form>
            <Snackbar open={snackbarAberto} autoHideDuration={6000} onClose={() => setSnackbarAberto(false)}>
                <Alert severity="error">
                    Ocorreu um erro ao realizar a operação
                </Alert>
            </Snackbar>
        </>
    );
};

export default Formulario;
