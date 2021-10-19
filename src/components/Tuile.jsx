import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import '../lol.css'

const styles = (theme) => ({
    tuiles: {
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: '#FFF',
        cursor: 'pointer',
        height: '100%',
    },

    imgTuile: {
        borderRadius: '20px 20px 0 0',
        display: 'inline-block',
    },
    txtTuile: {
        borderRadius: '0 0 20px 20px',
        height: 50,
        backgroundColor: 'black',
        opacity: .8,
        textAlign: 'left',
        padding: 5,
        color: 'white',
    },
    titleTuile: {
        textTransform: 'uppercase',
        margin: 0,
    },
    subtitleTuile: {
        margin: 0,
    },

});

function Tuile(props) {
    const {classes} = props;
    const [desc, setDesc] = useState();
    const infoOlfa = props.eachOlfa;

    useEffect(()=>{
        if (infoOlfa.descriptors !== undefined)
            setDesc(infoOlfa.descriptors);
    }, [infoOlfa, desc !== undefined]);


    return (
        <>

            <Grid item xs={12} sm={6} md={4} xl={2} onClick={props.onClick}>

                <div title={'Fiche ' + infoOlfa.name}>


                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className={"flip-card-front"} title={'Fiche ' + infoOlfa.name}>
                                <div>
                                    <img src={'logo192.png'} alt={''} className='imgTuile'
                                    />
                                    <h4 className='titleTuile'>{infoOlfa.name}</h4>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <h1>{infoOlfa.name}</h1>
                                <h4 className='subtitleTuile'>{infoOlfa.olfactory_family}</h4>
                                <h4>descripteurs : {desc !== undefined ? desc.map((d) => (d + ' ')) :
                                    <p>vide</p>}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

        </>
    );
}

Tuile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tuile);

