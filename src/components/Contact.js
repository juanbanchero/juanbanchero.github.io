import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    TextField,
    Typography,
    Button,
    Box,
    Grid,
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
    },
    heading: {
        textTransform: "uppercase",
        textAlign: "center",
        color: "black"
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: "10px"
    }
}));
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black"
        },
        "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                borderColor: "black",
            },
            "&.Mui-focused fieldset": {
                borderColor: "black"
            }
        }
    }
})(TextField);
const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="div">
                <NavBar />
                <Grid container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography variant="h5" className={classes.heading}>
                            Contact me!
                        </Typography>
                        <InputField
                            fullWidth={true}
                            label="Name"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                        />
                        <br />
                        <InputField
                            fullWidth={true}
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                        />
                        <br />
                        <InputField
                            fullWidth={true}
                            label="Company Name"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                        />
                        <br />
                        <Button variant="outlined" fullWidth endIcon={<ArrowForwardIosIcon />} className={classes.button}>
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default Contact
