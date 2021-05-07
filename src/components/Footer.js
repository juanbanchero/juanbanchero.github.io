import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNav': {
            minWidth: 0,
            maxWidth: 250,
            height: "70px",
        },
        '& .MuiSvgIcon-root': {
            fill: "white"
        }
    },
    bottomNavigation: {
        background: "black",
        paddingBottom: "2rem",
        paddingTop: "1rem",
        borderTop: "2px solid white",
    },
    bottomNavigationAction: {
        padding: 0,
        color: "white"
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" className={classes.bottomNavigation}>
            <BottomNavigationAction
                className={`${classes.bottomNavigationAction} ${classes.root}`}
                icon={<a href="https://www.linkedin.com/in/juanbanchero" target="_blank" rel='noreferrer noopener' ><LinkedInIcon fontSize={"large"} /></a>}
            >
            </BottomNavigationAction>
            <BottomNavigationAction
                className={`${classes.bottomNavigationAction} ${classes.root}`}
                icon={<a href="https://github.com/juanbanchero" target="_blank" rel='noreferrer noopener' ><GitHubIcon fontSize={"large"} /> </a>}
            >
            </BottomNavigationAction>
            <BottomNavigationAction
                className={`${classes.bottomNavigationAction} ${classes.root}`}
                icon={<a href="mailto:juanbanche@gmail.com" target="_blank" rel='noreferrer noopener' >
                    <EmailIcon fontSize={"large"} /></a>}
            >
            </BottomNavigationAction>
        </BottomNavigation >
    );
};

export default Footer
