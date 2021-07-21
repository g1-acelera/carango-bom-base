import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {pink} from "@material-ui/core/colors";

export const fabStyles = makeStyles(() => ({
    fab: {
        position: 'absolute',
        bottom: '100px',
        right: '100px',
    },
    actionsToolbar: {
        float: 'right'
    },
    actions: {
        top: '10px',
        marginLeft: '10px',
    }
}));

export const BotaoSalvar = withStyles ({
    root: {
        backgroundColor: pink[400],
        borderRadius: '20px',
        color: 'white',
        boxShadow: '0px 4px 4px rgba(236, 64, 122, 0.4)',
        '&:hover': {
            backgroundColor: '',
            borderColor: 'none',
            boxShadow: 'none',
        },
    },
})(Button);

export const BotaoCancelar = withStyles ({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderRadius: '20px',
        color: 'red',
        '&:hover': {
            backgroundColor: 'rgba(244, 67, 54, 0.05)',
            border: 'none',
            boxShadow: 'none',
        },
    },
})(Button);
