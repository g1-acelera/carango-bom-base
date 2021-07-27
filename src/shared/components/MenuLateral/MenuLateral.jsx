import React from "react";
import {AppBar, Drawer, Hidden, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import sidebarStyles from "../../../@material/Sidebar";
import MenuLateralItem from "./MenuLateralItem";

const MenuLateral = ({children}) => {
    const classes = sidebarStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Abrir menu"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Título da página
                        </Typography>
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
