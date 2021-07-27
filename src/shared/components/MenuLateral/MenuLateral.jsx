import React from "react";
import {AppBar, Drawer, Hidden, IconButton, Toolbar} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import sidebarStyles from "../../../@material/Sidebar";
import MenuLateralItem from "./MenuLateralItem";
import {BotaoEntrar} from "../../../@material/Button";

const MenuLateral = ({children}) => {
    const classes = sidebarStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <nav className={classes.drawer}>
                <AppBar position="fixed" className={`${classes.appBar}`}>
                    <Toolbar className="f-space-between">
                        <div>
                            <IconButton
                                color="inherit"
                                aria-label="Abrir menu"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <Menu/>
                            </IconButton>
                        </div>
                        <BotaoEntrar>
                            Entrar
                        </BotaoEntrar>
                    </Toolbar>
                </AppBar>

                {/*Mobile*/}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
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

                {/*Desktop*/}
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
