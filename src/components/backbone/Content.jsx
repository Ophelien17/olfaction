import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Tuile from "../Tuile";
import Sheet from "../sheet";
import Test from "../test";


const styles = (theme) => ({

    bubble:{
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
    }

});

const Content = (props) => {
    const { classes } = props;
    //const donne= props.donne;
    const [learnSheet, setLearnSheet] = useState(null);
    const [categori, setCategori] = useState(null);
    const[uneFois, setUnefois]= useState(true);
    const [donneeTestOlfa, setDonneeTestOlfa] = useState({});
    const [testOlfa, setTestOlfa] = useState({});

    useEffect(()=>{

        if (categori !== null){
            axios.get("http://localhost:8080/selectCat", {params:{name: categori}})
                .then((res) => {
                    setDonneeTestOlfa(res.data);
                }).catch((err) => {
                console.log("ERR : ", err)
            })
        }
        else{
            axios.get("http://localhost:8080/olfa")
                .then((res) => {
                    setDonneeTestOlfa(res.data);
                }).catch((err) => {
                console.log("ERR : ", err)
            })
        }




    }, [uneFois, categori]);


    const openTuile = (name)=>{
        if (name === learnSheet){
            setLearnSheet(null)
        }else
            setLearnSheet(name);
    };

    return (
        <>
            <Grid container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  className={classes.bubble}>

                <Grid item xs={4}>
                    <div className={classes.outerBubble} onClick={()=>{setCategori("natural")}}>
                        <div title={'matière naturelles'} className={classes.bubbleChoice}>
                            <img src="icons/natural.svg" alt="" className={classes.iconChoice}/>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={4}>
                    <div className={classes.outerBubble} onClick={()=>{setCategori("synthetic")}}>
                        <div title={'matière synthetiques'} className={classes.bubbleChoice}>
                            <img src="icons/synthetic.svg" alt="" className={classes.iconChoice}/>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <div className={classes.outerBubble} onClick={()=>{setCategori("perfume")}}>
                        <div title={'Parfums'} className={classes.bubbleChoice}>
                            <img src="icons/perfume.svg" alt="" className={classes.iconChoice}/>
                        </div>
                    </div>

                </Grid>
            </Grid>
            <Grid container spacing={2}>

                {
                    Object.entries(donneeTestOlfa).map((olfa)=>{
                        return(
                                <Tuile eachOlfa={olfa[1]} onClick={()=>{if(olfa[1]===learnSheet){setLearnSheet(null)} else{ setLearnSheet(olfa[1])}}}/>
                            )
                    })
                }

            </Grid>

            <Grid style={learnSheet !== null ? {display: 'inline'} : {display: 'none'}}>
                {
                    learnSheet !== null ?
                        <Sheet name={learnSheet} onClick={()=>(setTestOlfa(learnSheet))}/> :
                        <p></p>

                }
            </Grid>


            <Grid>
                {
                    testOlfa !== null ?
                        <Test olfa={testOlfa}/> :
                        <p></p>

                }

            </Grid>


            </>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);