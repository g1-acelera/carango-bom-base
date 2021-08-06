import {makeStyles} from "@material-ui/core/styles";

const tableStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: "100%",
    },
    searchIcon: {
        position: "absolute",
        zIndex: "1",
        left: "15px"
    },
    inputRoot: {
        width: "100%"
    },
    inputInput: {
        width: "100%",
        padding: theme.spacing(2, 2, 2, 7),
        transition: theme.transitions.create("width"),
        backgroundColor: "white",
        borderRadius: "20px",
        border: "1px solid var(--desabilitado)",
        position: "relative"
    },
    campoPesquisa: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    }
}));

export default tableStyles;
