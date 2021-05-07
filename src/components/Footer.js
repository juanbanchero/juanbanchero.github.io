import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
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
            fill: "white",
            '&:hover': {
                fill: "gray",
                fontSize: "1.8rem"
            }
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
                icon={<LinkedInIcon fontSize={"large"} />}
            >
            </BottomNavigationAction>
            <BottomNavigationAction
                className={`${classes.bottomNavigationAction} ${classes.root}`}
                icon={<GitHubIcon fontSize={"large"} />}
            >
            </BottomNavigationAction>
            <BottomNavigationAction
                className={`${classes.bottomNavigationAction} ${classes.root}`}
                icon={<EmailIcon fontSize={"large"} />}
            >
            </BottomNavigationAction>

        </BottomNavigation >
    );
};

export default Footer
