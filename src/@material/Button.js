import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {blue} from "@material-ui/core/colors";

export const fabStyles = makeStyles(() => ({
    fab: {
        position: 'absolute',
        top: '100%',
        right: '0%',
        boxShadow: "0px 4px 14px 0px rgb(173, 20, 87, .4)",
        '&:hover': {
            boxShadow: 'none',
        },
    },
    actionsToolbar: {
        float: 'right'
    },
    actions: {
        top: '10px',
        marginLeft: '10px',
    }
}));

export const BotaoPrincipal = withStyles({
    root: {
        backgroundColor: blue[600],
        borderRadius: '20px',
        color: 'white',
        boxShadow: '0px 4px 14px 0px rgba(30, 136, 229, .4)',
        '&:hover': {
            backgroundColor: 'rgba(30, 136, 229, .9)',
            borderColor: 'none',
            boxShadow: 'none',
        },
        '&:disabled': {
            backgroundColor: "var(--desabilitado)",
            color: "var(--texto-secundario)",
            boxShadow: "none",
        },
    },
})(Button);

export const BotaoCancelar = withStyles({
    root: {
        backgroundColor: 'transparent',
        borderRadius: '20px',
        color: 'red',
        boxShadow: "none",
        '&:hover': {
            boxShadow: "none",
            backgroundColor: 'rgba(244, 67, 54, 0.05)',
            border: 'none',
        },
    },
})(Button);

export const BotaoEntrar = withStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontSize: '.7rem',
        fontWeight: '800',
        borderRadius: '20px',
        color: 'var(--azul600)',
        border: '1.5px solid var(--azul600)',
        '&:hover': {
            backgroundColor: 'rgba(30, 136, 229, .1)',
        },
    },
})(Button);

export const BotaoSair = withStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontSize: '.7rem',
        fontWeight: '800',
        borderRadius: '20px',
        color: 'var(--vermelho400)',
        border: '1.5px solid var(--vermelho400)',
        '&:hover': {
            backgroundColor: 'rgba(239, 83, 80, .1)',
        },
    },
})(Button);
