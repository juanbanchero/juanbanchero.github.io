import React, { useState } from 'react';
import avatar from "../IMG_5246-removebg-preview.png"
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import MobileDrawer from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Hidden,
} from '@material-ui/core';
import {
    AssignmentInd,
    Home,
    Menu,
    Info,
} from '@material-ui/icons';

// CSS STYLES
const useStyles = makeStyles(theme => ({
    menuContainer: {
        width: 250,
        background: "black",
        height: "100%",
    },
    appBar: {
        background: "black",
        position: "static",
    },
    menuButton: {
        color: "white",
    },
    typo: {
        color: "white",
        paddingLeft: 10,
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    divider: {
        backgroundColor: "white",
    },
    navBarIcons: {
        color: "white",
    },
    itemText: {
        color: "white",
    },
    itemTextBlock: {
        color: "white",
        textAlign: "center",
        padding: "0 2rem",
        paddingLeft: "calc(max(22px, env(safe-area-inset-left)))",
        paddingRight: "calc(max(22px, env(safe - area - inset - right)))",
        paddingTop: "0",
        paddingBot: "0",
    },
    itemBlock: {
        color: "white",
        display: "flex",
        alignItems: "stretch"
    }
}));
const menuItems = [
    {
        icon: <Home />,
        textToDisplay: "Home",
        path: "/",
    },
    {
        icon: <AssignmentInd />,
        textToDisplay: "Resume",
        path: "/resume",
    },
    {
        icon: <Info />,
        textToDisplay: "About Me",
        path: "/aboutme",
    },
];
/*
    {
        icon: <ContactMail />,
        textToDisplay: "Contact Me",
        path: "/contact",
    },
    {
        icon: <Apps />,
        textToDisplay: "Portfolio",
        path: "/portfolio",
    },
*/
const NavBar = () => {
    const [navBarState, setNavBarState] = useState({
        left: false,
    });
    const classes = useStyles();

    const toggleSideBar = ((sideBar, open) => () => {
        setNavBarState({ ...navBarState, [sideBar]: open });
    });
    const sideBar = slider => {
        return (
            <Box
                component="div"
                className={classes.menuContainer}
                onClick={toggleSideBar(slider, false)}
            >
                <Avatar className={classes.avatar} src={avatar} alt="Juan I. Banchero" />
                <Divider className={classes.divider} />
                <List>
                    {menuItems.map((item, key) =>
                        <ListItem button key={key} className={classes.itemText} component={Link} to={item.path}>
                            <ListItemIcon className={classes.navBarIcons}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.textToDisplay} className={classes.itemText} />
                        </ListItem>
                    )}
                </List>
            </Box>
        );
    };

    return (
        <>
            <Box component="nav">
                <AppBar className={classes.appBar}>
                    <Hidden mdUp>
                        <Toolbar>
                            <IconButton onClick={toggleSideBar("left", true)}>
                                <Menu className={classes.menuButton} />
                            </IconButton>
                            <Typography variant="h5" className={classes.typo}>
                                Resume
                            </Typography>
                            <MobileDrawer
                                open={navBarState.left}
                                onClose={toggleSideBar("left", false)}
                            >
                                {sideBar("left")}
                                <Footer />
                            </MobileDrawer>
                        </Toolbar>
                    </Hidden>
                    <Hidden smDown>
                        <List className={classes.itemBlock} >
                            {menuItems.map((item, key) =>
                                <ListItem button key={key} component={Link} to={item.path} alignItems="center">
                                    <ListItemText primary={item.textToDisplay} className={classes.itemTextBlock} />
                                </ListItem>
                            )}
                        </List>
                    </Hidden>
                </AppBar>
            </Box>
        </>
    );
};

export default NavBar;






