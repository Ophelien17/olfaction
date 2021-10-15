import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Field from './fields';


const styles = (theme) => ({
    titleSheet:{
        textTransform: 'uppercase',
    },
    sheet: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        margin: '20px 0',
        padding: 10,
    },

    placeButtonSheet:{
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    buttonSheet: {
        border: 'none',
        margin: '10px 40px',
        padding: 10,
        borderRadius: 10,
        background: theme.palette.primary.main,
        boxShadow:  '3px 3px 10px #7e888f, -3px -3px 10px #ffffff',
        '&:active': {
            boxShadow: 'inset 3px 3px 10px #7e888f, inset -3px -3px 10px #ffffff',
        },
    },
});


function Test(props) {
    const {classes} = props;
    const [testOlfa, setTestOlfa] = useState({});
    const [olfa, setOlfa] = useState({});



    const handleChange = (evt) =>{
        const value = evt.target.value;
        setTestOlfa({
            ...testOlfa,
            [evt.target.name]: value
        })
    };

    const handleSubmit = (evt) =>{
        setOlfa(props.olfa);
        evt.preventDefault();

        if (olfa.type === 'natural'){
            var didier = Object.keys(olfa);
            didier.shift();
            didier.shift();
            didier = didier.sort();

            var jack = Object.keys(testOlfa);
            jack = jack.sort();

            for(var i=0; i<didier.length; i++){
                if (testOlfa[didier[i]] === undefined)
                    document.getElementById(didier[i]).placeholder = 'Le champs est vide !';
                else if(olfa[didier[i]].toLowerCase() === testOlfa[didier[i]].toLowerCase() || olfa[didier[i]].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === testOlfa[didier[i]].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
                    document.getElementById(didier[i]).style.color = 'green';
                else
                    document.getElementById(didier[i]).style.color = 'red';

            }
        }
    };

    return(
        <>
            <h2 className={classes.titleSheet}>{olfa.name === null ? 'Nom matière' : props.olfa.name}</h2>
            <div className={classes.sheet}>
                <form onSubmit={handleSubmit}>

                        <Field nameField={'Nom'} val={testOlfa} onChange={handleChange} nameValue={'name'}/>
                        <Field nameField={'Nom botanique'} val={testOlfa} onChange={handleChange}  nameValue={'botanic_name'}/>
                        <Field nameField={'Nom anglais'} nameValue={'english_name'} val={testOlfa}  onChange={handleChange}/>
                        <Field nameField={'Région'} val={testOlfa} onChange={handleChange}  nameValue={'region'}/>
                        <Field nameField={'Partie de la plante'} val={testOlfa} onChange={handleChange}  nameValue={'part_plante'}/>
                        <Field nameField={'Mode d\'extraction'} val={testOlfa} onChange={handleChange}  nameValue={'extraction_mode'}/>
                        <Field nameField={'Aspect'} val={testOlfa} onChange={handleChange}  nameValue={'aspect'}/>
                        <Field nameField={'Principaux constituents'} val={testOlfa} onChange={handleChange}  nameValue={'main_constituents'}/>
                        <Field nameField={'Famille olfactive'} val={testOlfa} onChange={handleChange}  nameValue={'olfactory_family'}/>
                        <Field nameField={'descripteurs'} val={testOlfa} onChange={handleChange}  nameValue={'descriptors'}/>
                        <Field nameField={'Ténacité'} val={testOlfa} onChange={handleChange}  nameValue={'tenacity'}/>
                        <Field nameField={'Régulation'} val={testOlfa} onChange={handleChange}  nameValue={'regulations'}/>
                        <Field nameField={'Prix moyen'} val={testOlfa} onChange={handleChange}  nameValue={'average_price'}/>
                        <Field nameField={'Emplois'} val={testOlfa} onChange={handleChange}  nameValue={'jobs'}/>
                        <Field nameField={'Parfums emblématuques'} val={testOlfa} onChange={handleChange}  nameValue={'iconic_perfume'}/>
                        <Field nameField={'Remaque'} val={testOlfa} onChange={handleChange}  nameValue={'rq'}/>


                <div className={classes.placeButtonSheet}>
                    <input className={classes.buttonSheet} type={'submit'} value={'Envoyer'}/>
                </div>
                </form>

            </div>

        </>
    );
}

Test.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Test);