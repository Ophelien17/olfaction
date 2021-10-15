import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';


const styles = (theme) => ({
    champsSheet: {
        margin: '20px 40px',
        display: 'flex',
    },
    labelSheet: {
        whiteSpace: 'nowrap',
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
        <div className={classes.champsSheet}>
            <label className={classes.labelSheet} htmlFor={props.nameValue}>{props.nameField} :
                <input className={classes.styleInputSheet} autoComplete={'off'} type="text" name={props.nameValue} id={props.nameValue} value={props.val.nameValue} onChange={props.onChange}/>
            </label>
        </div>
    )
};


Fields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fields);