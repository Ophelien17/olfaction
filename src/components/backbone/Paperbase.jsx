import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Olfaction
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#CFE8FA',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
                opacity: .8,
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
            opacity: 1,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#efefef',
    },
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
    bubble: {
        marginBottom: 20,
    },
    outerBubble: {
        textAlign: 'center',
    },
    bubbleChoice: {
        backgroundColor: '#CFE8FA',
        display: 'inline-block',
        padding: '20px',
        borderRadius: '50%',
        cursor: 'pointer',
    },

    iconChoice: {
        height: '30px',
    },
};

function Paperbase(props) {
    const {classes} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [section, setSection] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                        <Navigator
                            PaperProps={{style: {width: drawerWidth}}}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            onUpdate={(valeur) => {
                                if (section === valeur) {
                                    console.log('bg')
                                }
                                if (section === null || section === valeur) {
                                    setSection(valeur);
                                } else {
                                    setSection(null);
                                }
                            }
                            }
                        />
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Navigator PaperProps={{style: {width: drawerWidth}}} onUpdate={(valeur) => {
                            console.log(section)
                            console.log(valeur)
                            if (section != valeur) {
                                console.log('bg')
                            }
                            if (section === null) {
                                setSection(valeur);
                            } else {
                                setSection(null);
                            }
                        }
                        }/>
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header onDrawerToggle={handleDrawerToggle}/>
                    <main className={classes.main}>
                        <Content section={section}/>
                    </main>
                    <footer className={classes.footer}>
                        <Copyright/>
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );

}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);