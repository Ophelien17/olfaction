import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import Field from "../fields";

const styles = (theme) => ({});

const AddPer = (props) => {
    const {classes} = props;
    const [addPerfume, setAddPerfume] = useState()


    const handleChange = (evt) => {
        const value = evt.target.value;
        setAddPerfume({
            ...addPerfume,
            [evt.target.name]: value
        });

    };

    const handleSubmit = (evt) => {
        console.log(addPerfume);
        evt.preventDefault();
    };

    return (<>
        <h2>Nouvelle fiche Parfum</h2>


        <form onSubmit={handleSubmit}>
            <Field nameField={'Nom'} val={""} onChange={handleChange} nameValue={'name'}/>
            <Field nameField={'Nom botanique'} val={""} onChange={handleChange} nameValue={'botanic_name'}/>
            <Field nameField={'Nom anglais'} nameValue={'english_name'} val={""} onChange={handleChange}/>
            <Field nameField={'Région'} val={""} onChange={handleChange} nameValue={'region'}/>
            <Field nameField={'Partie de la plante'} val={""} onChange={handleChange} nameValue={'part_plante'}/>
            <Field nameField={'Mode d\'extraction'} val={""} onChange={handleChange} nameValue={'extraction_mode'}/>
            <Field nameField={'Aspect'} val={""} onChange={handleChange} nameValue={'aspect'}/>
            <Field nameField={'Principaux constituents'} val={""} onChange={handleChange}
                   nameValue={'main_constituents'}/>
            <Field nameField={'Famille olfactive'} val={""} onChange={handleChange} nameValue={'olfactory_family'}/>
            <Field nameField={'descripteurs'} val={""} onChange={handleChange} nameValue={'descriptors'}/>
            <Field nameField={'Ténacité'} val={""} onChange={handleChange} nameValue={'tenacity'}/>
            <Field nameField={'Régulation'} val={""} onChange={handleChange} nameValue={'regulations'}/>
            <Field nameField={'Prix moyen'} val={""} onChange={handleChange} nameValue={'average_price'}/>
            <Field nameField={'Emplois'} val={""} onChange={handleChange} nameValue={'jobs'}/>
            <Field nameField={'Parfums emblématuques'} val={""} onChange={handleChange} nameValue={'iconic_perfume'}/>
            <Field nameField={'Remaque'} val={""} onChange={handleChange} nameValue={'rq'}/>

            <input type={'submit'} value={'Nouvelle fiche'}/>
        </form>
    </>);

};

AddPer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPer);