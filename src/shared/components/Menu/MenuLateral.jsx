import React, {useState} from "react";
import {Drawer, Hidden} from "@material-ui/core";
import sidebarStyles from "../../../@material/Sidebar";
import MenuLateralItem from "./MenuLateralItem";
import MenuSuperior from "./MenuSuperior";

const MenuLateral = ({children}) => {
    const classes = sidebarStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    function alteraVisibilidadeMenuLateral() {
        setMobileOpen(!mobileOpen)
    }

    return (
        <div className={classes.root}>
            <nav className={classes.drawer}>
                <MenuSuperior menuClick={alteraVisibilidadeMenuLateral}/>

                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
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
