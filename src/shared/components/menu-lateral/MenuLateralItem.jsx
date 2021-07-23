import React from "react";
import {Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import MENU_ITEM from "./constants/menu-item.const";
import sidebarStyles from "../../../@material/Sidebar";

const MenuLateralItem = () => {
    const classes = sidebarStyles();

    return (
        <>
            <div className={classes.toolbar}>
                <h1 className="principal700-fg titulo">Carango bom</h1>
            </div>
            <Divider/>
            <List>
                {MENU_ITEM.map((item) => (
                    <ListItem button key={item.nome}>
                        <ListItemIcon>{item.icone}</ListItemIcon>
                        <ListItemText primary={item.nome}/>
                    </ListItem>
                ))}
            </List>

            {/*<List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>*/}
        </>
    );
};

export default MenuLateralItem;
