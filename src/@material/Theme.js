import pink from '@material-ui/core/colors/pink';
import {ptBR} from '@material-ui/core/locale';
import {makeStyles} from '@material-ui/core';
import {createTheme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

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
            main: pink[800],
            error: red[500]
        }
    },
    typography: {
        "fontFamily": `"Nunito", sans-serif;`,
        "fontSize": 14,
    },
}, ptBR);