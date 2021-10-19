import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import React, {useState} from 'react';
import Field from "../fields";
import axios from "axios";

const styles = (theme) => ({
    select: {
        margin: '0 40px',
        border: 'none',
        borderRadius: 2,
        borderBottom: '1px solid',
    },
    buttonSheet: {
        border: 'none',
        margin: "10px 40px",
        padding: 10,
        borderRadius: 10,
        background: theme.palette.primary.main,
        boxShadow: '3px 3px 10px #7e888f, -3px -3px 10px #ffffff',
        '&:active': {
            boxShadow: 'inset 3px 3px 10px #7e888f, inset -3px -3px 10px #ffffff',
        },
    },
});

const AddNat = (props) => {
    const {classes} = props;
    const [addNatural, setAddNatural] = useState();
    const [image, setImage] = useState();


    const handleChange = (evt) => {
        const value = evt.target.value;
        setAddNatural({
            ...addNatural,
            [evt.target.name]: value,
            'type': props.type,
        });
    };

    const handleChangeImg = (evt) => {
        const file = evt.target;
        var files = file.files;
        console.log(files);
        var fr = new FileReader()
        fr.onload = function () {
            document.getElementById('outImage').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    };

    const handleSubmit = (evt) => {

        changeToArray('region');
        changeToArray('main_constituents');
        changeToArray('descriptors');
        changeToArray('iconic_perfume');

        evt.preventDefault();

        axios.post('http://localhost:8080/newSheet', {
            addNatural
        }, {params: {typeOfSheet: 'addNatural'}},).then(function (response) {
            console.log(response);
        });
    };

    const changeToArray = (objectField) => {
        var tmp = [];
        if (addNatural[objectField] !== undefined) {
            var of = addNatural[objectField].split(',');
            of.map((d) => {
                if (d.substr(0, 1) !== " ")
                    tmp.push(d);
                else if (d.substr(0, 1) === " ")
                    tmp.push(d.slice(1));

            });
            addNatural[objectField] = tmp;
        }
    };


    return (
        <>
            <h2>Nouvelle fiche Naturelle <img alt={'intérogation'}
                                              title={'Attention : pour les champs : "région", "Principaux constituents", "descripteurs" et "Parfums emblématuques" merci de separer chaque entité par une virgule. Pour le champs "prix", le sigle euro ne doit pas etre incrit'}
                                              src={'icons/interrogation.svg'} height={20}/>
            </h2>

            <form onSubmit={handleSubmit}>
                <input value={props.type} name={'type'} onChange={handleChange} style={{display: 'none'}}/>
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

                <select className={classes.select} name="tenacity" id="pet-select" onChange={handleChange}>
                    <option value="" disabled selected>Tenacité</option>
                    <option value="note de tête">note de tête</option>
                    <option value="note de coeur">note de coeur</option>
                    <option value="note de fond">note de fond</option>
                </select>

                <Field nameField={'Régulation'} val={""} onChange={handleChange} nameValue={'regulations'}/>
                <Field nameField={'Prix moyen'} val={""} onChange={handleChange} nameValue={'average_price'}/>
                <Field nameField={'Emplois'} val={""} onChange={handleChange} nameValue={'jobs'}/>
                <Field nameField={'Parfums emblématuques'} val={""} onChange={handleChange}
                       nameValue={'iconic_perfume'}/>
                <Field nameField={'Remaque'} val={""} onChange={handleChange} nameValue={'rq'}/>

                /* <label htmlFor="imgMaterial">Choisir une photo d'illustratin de la matière (.jpg) : </label>

                 <input type="file"
                        id="imgMaterial" name="imgMaterial"
                        accept=".jpg" onChange={handleChangeImg}/>*/

                <input className={classes.buttonSheet} type={'submit'} value={'Nouvelle fiche'}/>
                <img id={'outImage'}/>
            </form>


        </>
    );

};

AddNat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNat);