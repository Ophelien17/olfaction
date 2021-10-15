import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    tuiles: {
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: '#FFF',
        cursor: 'pointer',
    },
    imgTuile:{
        borderRadius: '20px 20px 0 0',
        display: 'inline-block',
    },
    txtTuile:{
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
    subtitleTuile:{
        margin: 0,
    },

});

function Tuile(props) {
    const {classes} = props;
    const infoOlfa = props.eachOlfa;
   // const[descriptors, setDescriptors]=useState([]);

    useEffect(()=>{
     //   setDescriptors(infoOlfa.descriptors);
    })


    return(
        <>

        <Grid item xs={12} sm={6} md={4} xl={2} onClick={props.onClick}>

                    <div className={classes.tuiles} title={'Fiche '+infoOlfa.name}>
                        <img src={'logo192.png'} alt={''} className={classes.imgTuile}/>
                        <div className={classes.txtTuile}>
                            <h4 className={classes.titleTuile}>{infoOlfa.name}</h4>
                            <h6 className={classes.subtitleTuile}>{infoOlfa.olfactory_family}</h6>
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

