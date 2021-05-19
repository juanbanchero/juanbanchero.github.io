import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Avatar
} from '@material-ui/core';
import avatar from '../about-me.png';
import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
        height: "80%",
        padding: 0,
    },
    avatar: {
        display: "block",
        margin: theme.breakpoints.down("sm") ? "0 auto" : "0.5rem auto",
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
}));
const AboutMe = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="div">
                <NavBar />
                <Grid container justify="center">
                    <Box component="div" className={classes.form}>
                        <Avatar variant="square" src={avatar} alt="This is me" className={classes.avatar} />
                        <Box component="div">
                            <Typography variant="h5">
                                I'm Juan!
                        </Typography>
                            <Typography variant="subtitle1">
                                UI Software Engineer with 2+ years of experience. I'm always eager to learn and keep growing my
                                knowledge as I work. I am a fan of movies and I listen to Cerati more times that you can count.
                                Always trying to be more productive, I tested every to do list/note taking/focus app which is nonsense but only stayed with
                                <a href="https://culturedcode.com/things/" target="_blank" rel='noreferrer noopener'> Things</a>,<a href="https://workflowy.com/hello/" target="_blank" rel='noreferrer noopener'> Workflowy</a> and <a href="https://calendar.google.com/" target="_blank" rel='noreferrer noopener'>Google Calendar</a>.
                                You can get in touch with me in <a href="https://www.linkedin.com/in/juanbanchero" target="_blank" rel='noreferrer noopener'>Linkedin</a>, <a href="mailto:juanbanche@gmail.com" target="_blank" rel='noreferrer noopener'>Gmail</a> or you could see my <a href="https://github.com/juanbanchero" target="_blank" rel='noreferrer noopener'>Github.</a>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default AboutMe;
