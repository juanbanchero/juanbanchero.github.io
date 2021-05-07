import React from 'react';
import avatar from '../IMG_5245-removebg-preview.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
    subtitle: {
        color: "#696969",
        marginBottom: "3rem"
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify="center">
                <Avatar src={avatar} alt="Juan I. Banchero" className={classes.avatar} />
            </Grid>
            <Typography variant="h4">
                <Typed strings={["Juan I. Banchero"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant="h5" className={classes.subtitle} >
                <Typed
                    strings={["UI Software Engineer", "Web Design", "Web Development"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
            </Typography>
        </Box>
    );
};

export default Header;
