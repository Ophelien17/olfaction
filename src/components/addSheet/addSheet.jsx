import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import React, {useEffect, useState} from 'react';

import AddNat from './addNat';
import AddSyn from './addSyn';
import AddPer from './addPer';

const styles = (theme) => ({});

const AddSheet = (props) => {
    const {classes} = props;
    const [newOlfa, setNewOlfa] = useState({});
    const [newOlfaType, setNewOlfaType] = useState('natural');


    const handleTypeChange = (evt) => {
        const value = evt.target.value;
        setNewOlfaType({
            ...newOlfa,
            [evt.target.name]: value
        });
    };


    const handleSubmit = (evt) => {
        evt.preventDefault();


    };


    return (<>
            <h2>Ajout de nouvelle fiche</h2>
            <h4>Type de la matière</h4>

            <input type="radio" id="typeN" name="type" value="natural" onChange={handleTypeChange}/>
            <label htmlFor="typeN">Naturel</label>
            <input type="radio" id="typeS" name="type" value="synthetic" onChange={handleTypeChange}/>
            <label htmlFor="typeS">Synthetique</label>
            <input type="radio" id="typeP" name="type" value="perfume" onChange={handleTypeChange}/>
            <label htmlFor="typeP">Parfum</label>

            {
                newOlfaType.type === 'natural' ?
                    <AddNat type={newOlfaType.type}/> :
                    <p></p>
            }
            {
                newOlfaType.type === 'synthetic' ?
                    <AddSyn type={newOlfaType.type}/> :
                    <p></p>
            }
            {
                newOlfaType.type === 'perfume' ?
                    <AddPer type={newOlfaType.type}/> :
                    <p></p>
            }
        </>
    );

};

AddSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSheet);