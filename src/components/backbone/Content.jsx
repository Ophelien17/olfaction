import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import axios from "axios";

import Tuile from "../Tuile";
import Sheet from "../sheet";
import Test from "../test";
import AddSheet from '../addSheet/addSheet';


const styles = (theme) => ({

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
    testp: {
        textAlign: 'center',
    },
    returnBtn: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
    },
    returnBtnTxt: {
        margin: 2,
    }

});

const Content = (props) => {
    const {classes} = props;

    //const donne= props.donne;
    const [learnSheet, setLearnSheet] = useState(null);
    const [categori, setCategori] = useState(null);
    const [uneFois] = useState(true);
    const [donneeTestOlfa, setDonneeTestOlfa] = useState({});
    const [testOlfa, setTestOlfa] = useState(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        if (props.section !== null) {

            if (props.section[0] === 'menu') {
                setCategori(null);
            } else if (props.section[0] === 'material') {
                if (categori === null)
                    setCategori(props.section[1]);
                else if (categori !== props.section[1])
                    setCategori(props.section[1]);
                else
                    setCategori(null);

            } else if (props.section[0] === 'materialName') {
                if (learnSheet === null)
                    setLearnSheet(props.section[1]);
                else if (learnSheet.name !== props.section[1].name)
                    setLearnSheet(props.section[1]);
                else
                    setLearnSheet(null);

            } else if (props.section[0] === 'settings') {
                if (settings === null) {
                    setSettings(props.section[1]);
                    console.log(settings)
                } else if (settings !== props.section[1]) {
                    setSettings(props.section[1]);
                    console.log(settings)
                } else {
                    setSettings(null);
                    console.log(settings)
                }
            }
        } else {
            setCategori(null);
            setLearnSheet(null);
            setSettings(null);
        }

    }, [props.section]);

    useEffect(() => {

        if (categori !== null) {
            axios.get("http://192.168.250.64:8080/selectCat", {params: {name: categori}})
                .then((res) => {
                    setDonneeTestOlfa(res.data);
                }).catch((err) => {
                console.log("ERR : ", err)
            })
        } else {
            axios.get("http://192.168.250.64:8080/olfa")
                .then((res) => {
                    setDonneeTestOlfa(res.data);
                }).catch((err) => {
                console.log("ERR : ", err)
            })
        }


    }, [uneFois, categori]);


    return (
        <>
            {
                settings === null ?
                    <div>
                        <Grid container
                              spacing={1}
                              justifyContent="center"
                              alignItems="center"
                              className={classes.bubble}>


                            <Grid item xs={4}>
                                <div className={classes.outerBubble} onClick={() => {
                                    if (categori === null || categori !== "natural") {
                                        setCategori("natural")
                                    } else {
                                        setCategori(null)
                                    }
                                }}>
                                    <div title={'matière naturelles'} className={classes.bubbleChoice}>
                                        <img src="icons/natural.svg" alt="" className={classes.iconChoice}/>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={4}>
                                <div className={classes.outerBubble} onClick={() => {
                                    if (categori === null || categori !== "synthetic") {
                                        setCategori("synthetic")
                                    } else {
                                        setCategori(null)
                                    }
                                }}>
                                    <div title={'matière synthetiques'} className={classes.bubbleChoice}>
                                        <img src="icons/synthetic.svg" alt="" className={classes.iconChoice}/>
                                    </div>
                                </div>

                            </Grid>
                            <Grid item xs={4}>
                                <div className={classes.outerBubble} onClick={() => {
                                    if (categori === null || categori !== "perfume") {
                                        setCategori("perfume")
                                    } else {
                                        setCategori(null)
                                    }
                                }}>
                                    <div title={'Parfums'} className={classes.bubbleChoice}>
                                        <img src="icons/perfume.svg" alt="" className={classes.iconChoice}/>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>

                            {
                                Object.entries(donneeTestOlfa).map((olfa) => {
                                    return (
                                        <Tuile eachOlfa={olfa[1]} onClick={() => {
                                            if (olfa[1] === learnSheet) {
                                                setLearnSheet(null);
                                                setTestOlfa(null)
                                            } else {
                                                setLearnSheet(olfa[1])
                                            }
                                        }}/>
                                    )
                                })
                            }

                        </Grid>

                        <Grid style={learnSheet !== null ? {display: 'inline'} : {display: 'none'}}>
                            {
                                learnSheet !== null ?
                                    <Sheet name={learnSheet} onClick={() => (setTestOlfa(learnSheet))}/> :
                                    <p></p>

                            }


                        </Grid>


                        <Grid
                            style={testOlfa !== null && learnSheet !== null ? {display: 'inline'} : {display: 'none'}}>
                            {
                                testOlfa !== null ?
                                    <Test olfa={testOlfa}/> :
                                    <p></p>

                            }

                        </Grid>
                    </div>
                    :
                    <Grid container>
                        <Grid>
                            <div className={classes.returnBtn} onClick={() => {
                                setSettings(null)
                            }}>
                                <img src={'icons/leftArrow.svg'} alt={'left arrow'} width={15}/>
                                <p className={classes.returnBtnTxt}>Retour</p>
                            </div>
                            <AddSheet/>
                        </Grid>
                    </Grid>

            }



        </>
    );
};

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);