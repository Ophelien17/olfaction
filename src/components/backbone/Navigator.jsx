import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField/TextField";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import axios from "axios";


const styles = (theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: '#F8F8F8',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: 'pink',

    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },

    searchInput: {
        fontSize: theme.typography.fontSize,
        color: '#F8F8F8',
    },
});

function Navigator(props) {
    const {classes, ...other} = props;
    const [olfaN, setOlfaN] = useState(null);
    const [olfaS, setOlfaS] = useState(null);
    const [olfaP, setOlfaP] = useState(null);
    const [uneFois] = useState(true);

    useEffect(() => {
        axios.get("http://192.168.250.64:8080/selectCat", {params: {name: 'natural'}})
            .then((res) => {
                setOlfaN(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });
        axios.get("http://192.168.250.64:8080/selectCat", {params: {name: 'synthetic'}})
            .then((res) => {
                setOlfaS(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });
        axios.get("http://192.168.250.64:8080/selectCat", {params: {name: 'perfume'}})
            .then((res) => {
                setOlfaP(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });
    }, [uneFois]);



    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}
                          onClick={() => {
                              props.onUpdate(['menu'])
                          }}>
                    Menu
                </ListItem>

                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                    <ListItemIcon className={classes.itemIcon}>
                        <SearchIcon/>
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Rechercher"
                            InputProps={{
                                disableUnderline: true,
                                className: classes.searchInput,
                            }}
                        />
                    </ListItemText>
                </ListItem>

                <Grid item xs>

                </Grid>
                <ListItem button className={classes.categoryHeader} onClick={() => {
                    props.onUpdate(['material', 'natural'])
                }}>
                    <ListItemText
                        classes={{
                            primary: classes.categoryHeaderPrimary,
                        }}
                    >
                        Matière première naturelle
                    </ListItemText>
                </ListItem>
                {
                    olfaN !== null ?

                        Object.entries(olfaN).map((oN) => (
                            <ListItem
                                key={oN[1].name}
                                button
                                className={clsx(classes.item)}
                                onClick={() => {
                                    props.onUpdate(['materialName', oN[1]])
                                }}
                            >
                                <ListItemIcon className={classes.itemIcon}>x</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    {oN[1].name}
                                </ListItemText>
                            </ListItem>
                        ))
                        : <p></p>
                }
                <Divider className={classes.divider}/>
                <ListItem button className={classes.categoryHeader} onClick={() => {
                    props.onUpdate(['material', 'synthetic'])
                }}>
                    <ListItemText
                        classes={{
                            primary: classes.categoryHeaderPrimary,
                        }}
                    >
                        Matière première synthétique
                    </ListItemText>
                </ListItem>
                {
                    olfaS !== null ?

                        Object.entries(olfaS).map((oS) => (
                            <ListItem
                                key={oS[1].name}
                                button
                                className={clsx(classes.item)}
                                onClick={() => {
                                    props.onUpdate(['materialName', oS[1]])
                                }}
                            >
                                <ListItemIcon className={classes.itemIcon}>x</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    {oS[1].name}
                                </ListItemText>
                            </ListItem>
                        ))
                        : <p></p>
                }
                <Divider className={classes.divider}/>

                <ListItem button className={classes.categoryHeader} onClick={() => {
                    props.onUpdate(['material', 'perfume'])
                }}>
                    <ListItemText
                        classes={{
                            primary: classes.categoryHeaderPrimary,
                        }}
                    >
                        Parfum
                    </ListItemText>
                </ListItem>
                {
                    olfaP !== null ?

                        Object.entries(olfaP).map((oP) => (
                            <ListItem
                                key={oP[1].name}
                                button
                                className={clsx(classes.item)}
                                onClick={() => {
                                    props.onUpdate([oP[1]])
                                }}
                            >
                                <ListItemIcon className={classes.itemIcon}>x</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    {oP[1].name}
                                </ListItemText>
                            </ListItem>
                        ))
                        : <p></p>
                }
                <Divider className={classes.divider}/>
                <ListItem className={classes.categoryHeader}>
                    <ListItemText
                        classes={{
                            primary: classes.categoryHeaderPrimary,
                        }}
                    >
                        Réglage
                    </ListItemText>
                </ListItem>

                <ListItem
                    key={'Ajout d\'une fiche'}
                    button
                    className={clsx(classes.item)}
                >
                    <ListItemIcon className={classes.itemIcon}>x</ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                        onClick={() => {
                            props.onUpdate(['settings', 'Ajouter une fiche'])
                        }}
                    >
                        Ajouter une fiche
                    </ListItemText>
                </ListItem>
                <ListItem
                    key={'Déconnexion'}
                    button
                    className={clsx(classes.item)}
                    onClick={() => {
                        props.onUpdate(['settings', 'deconnexion'])
                    }}
                >
                    <ListItemIcon className={classes.itemIcon}>x</ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                    >
                        Déconnexion
                    </ListItemText>
                </ListItem>
                <Divider className={classes.divider}/>
                <Router>
                    <Switch>
                    </Switch>
                </Router>


            </List>
        </Drawer>
    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);