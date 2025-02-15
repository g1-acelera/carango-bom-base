import {makeStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const drawerWidth = 240;

const SidebarStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            flexShrink: 0,
        },
    },
    appBar: {
        backgroundColor: 'white !important',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `calc(drawerWidth + 1rem)`,
            color: grey[800],
            boxShadow: "none",
            display: "flex",
            justifyContent: "flex-end"
        },
        [theme.breakpoints.down('sm')]: {
            color: "var(--azul600)"
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
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "240px",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0",
        },
    },
}));

export default SidebarStyles;
