import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import NavBar from "./NavBar";
import Cover from '../cover-6.jpg';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: `url(${Cover}) no-repeat center center fixed`,
        backgroundSize: "cover",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid black",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        background: "#fdfdfd",
        borderBottom: "2px solid black",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": { //arrow
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "black black transparent transparent",
            borderWidth: "0.300rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "black",

            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent black black",
            },
        },
    },
    heading: {
        color: "white",
        background: "black",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subheading: {
        padding: "0",
        textTransform: "uppercase",
        color: "black",
    },
    body1: {
        color: "black"
    },
    subtitle1: {
        color: "gray",
    },
    yearlyTimeLine: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "white",
        color: "gray",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    }
}));
const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <NavBar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" align="center" className={`${classes.yearlyTimeLine} ${classes.timeLineItem}`}>
                        2021
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subheading}>
                            UI Engineer
                        </Typography>
                        <Typography variant="body1" className={classes.body1}>
                            JP Morgan
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle1}>
                            Working as a full time software engineer
                        </Typography>
                    </Box>
                    <Typography variant="h2" align="center" className={`${classes.yearlyTimeLine} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subheading}>
                            UI Engineer
                        </Typography>
                        <Typography variant="body1" className={classes.body1}>
                            JP Morgan
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle1}>
                            lorem ipsum
                        </Typography>
                    </Box>
                    <Typography variant="h2" align="center" className={`${classes.yearlyTimeLine} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" className={classes.subheading}>
                            UI Engineer
                        </Typography>
                        <Typography variant="body1" className={classes.body1}>
                            JP Morgan
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle1}>
                            lorem ipsum
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </>
    );
};

export default Resume;
