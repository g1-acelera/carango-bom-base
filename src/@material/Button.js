import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

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
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '1px solid green',
        color: 'green',
        '&:hover': {
            backgroundColor: 'lightgray',
            borderColor: 'none',
            boxShadow: 'none',
        },
        '&:disabled': {
            border: '1px solid lightgray'
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

// export 