import blue from '@material-ui/core/colors/blue';
import {ptBR} from '@material-ui/core/locale';
import {createTheme, makeStyles} from '@material-ui/core';

export const defaultStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: blue[900],
        }
    },
}, ptBR);