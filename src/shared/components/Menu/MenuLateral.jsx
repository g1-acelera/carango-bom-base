import React, {useState} from "react";
import {Drawer, Hidden} from "@material-ui/core";
import SidebarStyles from "../../../@material/SidebarStyles";
import MenuLateralItem from "./MenuLateralItem";
import MenuSuperior from "./MenuSuperior";

const MenuLateral = ({children}) => {
    const classes = SidebarStyles();
    const [menuAberto, setMenuFechado] = useState(false);

    function alteraVisibilidadeMenuLateral() {
        setMenuFechado(!menuAberto);
    }

    return (
        <div className={classes.root}>
            <nav className={classes.drawer}>
                <MenuSuperior menuClick={alteraVisibilidadeMenuLateral}/>

                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={menuAberto}
                        onClose={alteraVisibilidadeMenuLateral}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <MenuLateralItem/>
                    </Drawer>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <MenuLateralItem/>
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
};

export default MenuLateral;
