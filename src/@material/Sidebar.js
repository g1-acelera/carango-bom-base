import {makeStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const drawerWidth = 240;

const sidebarStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `calc(drawerWidth + 1rem)`,
            backgroundColor: 'white',
            color: grey[800],
            boxShadow: "none",
            display: "flex",
            justifyContent: "flex-end"
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        boxShadow: "var(--shadow-1)",
        border: "none"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default sidebarStyles;
