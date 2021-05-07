import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
// CSS STYLES
const useStyles = makeStyles({
    particles: {
        position: "absolute",
        opacity: 0.5,
    }
});
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <Header />
            <Particles canvasClassName={classes.particles} params={{
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: false,
                            value_area: 900,
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 1,
                            color: "#000000"
                        }
                    },
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#000000",
                            blur: 5,
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 6,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 6,
                            size_min: 0.1,
                            sync: true
                        }
                    }
                }
            }} />
        </div>
    );
};

export default Home;
