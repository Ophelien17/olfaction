import React from "react";
import {Grid, withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';


const styles = (theme) => ({
    champsSheet: {
        margin: '20px 40px',
        display: 'flex',
    },
    styleInputSheet: {
        width: '100%',
        border: "none",
        borderBottom: '1px solid',
    },
})

function Fields(props) {
    const {classes} = props;

    return(
        <div className={classes.champsSheet} id={props.id}>
            <Grid container>
                <Grid item xs={12}>
                    <label htmlFor={props.nameValue}>{props.nameField} :</label>
                </Grid>
                <Grid item xs={12}>
                    <input className={classes.styleInputSheet} autoComplete={'off'} type="text" name={props.nameValue}
                           id={props.nameValue} value={props.val.nameValue} onChange={props.onChange}/>
                </Grid>
            </Grid>
        </div>
    )
};


Fields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fields);