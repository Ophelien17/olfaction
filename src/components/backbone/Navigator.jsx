import React, {useEffect, useState, Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid1 from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField/TextField";
import axios from "axios";

import _ from 'lodash'
import faker from 'faker'
import {Search, Grid, Header, Segment, Label} from 'semantic-ui-react'

const test = {
    "panel": {
        "name": "panel",
        "results": [
            {
                "title": "Williamson Group",
                "description": "Ameliorated neutral help-desk",
                "image": "https://cdn.fakercloud.com/avatars/orkuncaylar_128.jpg",
                "price": "$42.75"
            },
            {
                "title": "Pacocha, Morissette and Runte",
                "description": "Horizontal encompassing matrix",
                "image": "https://cdn.fakercloud.com/avatars/kohette_128.jpg",
                "price": "$33.45"
            },
            {
                "title": "Luettgen and Sons",
                "description": "Upgradable tangible matrices",
                "image": "https://cdn.fakercloud.com/avatars/sunlandictwin_128.jpg",
                "price": "$98.92"
            },
            {
                "title": "Gottlieb - Casper",
                "description": "Total 3rd generation monitoring",
                "image": "https://cdn.fakercloud.com/avatars/samihah_128.jpg",
                "price": "$85.06"
            },
            {
                "title": "Goyette, Bednar and Powlowski",
                "description": "Fully-configurable system-worthy service-desk",
                "image": "https://cdn.fakercloud.com/avatars/psaikali_128.jpg",
                "price": "$39.23"
            }
        ]
    },
    "feed": {
        "name": "feed",
        "results": [
            {
                "title": "Murazik - Schroeder",
                "description": "Re-contextualized mission-critical workforce",
                "image": "https://cdn.fakercloud.com/avatars/superoutman_128.jpg",
                "price": "$3.05"
            },
            {
                "title": "Koch LLC",
                "description": "Stand-alone actuating encoding",
                "image": "https://cdn.fakercloud.com/avatars/balintorosz_128.jpg",
                "price": "$3.32"
            },
            {
                "title": "Conn - Cole",
                "description": "Sharable fresh-thinking policy",
                "image": "https://cdn.fakercloud.com/avatars/chadengle_128.jpg",
                "price": "$60.52"
            },
            {
                "title": "Rutherford, O'Kon and Ryan",
                "description": "Programmable context-sensitive software",
                "image": "https://cdn.fakercloud.com/avatars/thierrymeier__128.jpg",
                "price": "$24.48"
            },
            {
                "title": "Harber and Sons",
                "description": "Customizable logistical matrices",
                "image": "https://cdn.fakercloud.com/avatars/adammarsbar_128.jpg",
                "price": "$43.86"
            }
        ]
    }
}

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
        marginLeft: 5,
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
    const [olfa, setOlfa] = useState(null);
    const [uneFois] = useState(true);

    const [isLoading, setIsLoading] = useState();
    const [value, setValue,] = useState('');
    const [results, setResults,] = useState();
    const initialState = () => {
        setIsLoading(false);
        setResults([]);
        setValue('')
    };

    useEffect(() => {
        axios.get("http://localhost:8080/selectCat", {params: {name: 'natural'}})
            .then((res) => {
                setOlfaN(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });
        axios.get("http://localhost:8080/selectCat", {params: {name: 'synthetic'}})
            .then((res) => {
                setOlfaS(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });
        axios.get("http://localhost:8080/selectCat", {params: {name: 'perfume'}})
            .then((res) => {
                setOlfaP(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });
        axios.get("http://localhost:8080/Olfa")
            .then((res) => {
                setOlfa(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        });

    }, [uneFois]);


    const categoryLayoutRenderer = ({categoryContent, resultsContent}) => (
        <div>
            <h3 className='name'>{categoryContent}</h3>
            <div style={{background: 'red'}} className='results'>
                {resultsContent}
            </div>
        </div>
    )

    categoryLayoutRenderer.propTypes = {
        categoryContent: PropTypes.node,
        resultsContent: PropTypes.node,
    }

    const categoryRenderer = ({name}) => <Label as='span' content={name}/>;

    categoryRenderer.propTypes = {
        name: PropTypes.string,
    };

    const resultRenderer = ({title}) => <Label content={title}/>;

    resultRenderer.propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
    };


    const handleResultSelect = (e, {result}) => setValue(result.name)

    const handleSearchChange = (e, {value}) => {
        setIsLoading(true);
        setValue(value);

        setTimeout(() => {
            if (value.length < 1) return initialState;

            const re = new RegExp(_.escapeRegExp(value), 'i')
            const isMatch = (result) => re.olfa(result[0].name)

            const filteredResults = _.reduce(
                olfa,
                (memo, data, name) => {
                    const results = _.filter(data.results, isMatch)
                    if (results.length) memo[name] = {name, results} // eslint-disable-line no-param-reassign

                    return memo
                },
                {},
            )

            setIsLoading(false);
            setResults(filteredResults);
        }, 300)
    }


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

                <Grid1 item xs>

                </Grid1>
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
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                    >
                        Déconnexion
                    </ListItemText>
                </ListItem>
                <Divider className={classes.divider}/>


            </List>
        </Drawer>
    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);