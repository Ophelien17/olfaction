import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import Grid from '@material-ui/core/Grid';
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
        console.log(testOlfa);
        console.log('yo');
        evt.preventDefault()
        if (olfa.type === 'natural'){
         /*   if(olfa.name === testOlfa.name){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.name);

            if(olfa.botanic_name === testOlfa.botanic_name){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.botanic_name);

            if(olfa.english_name === testOlfa.english_name){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.english_name);

            if(olfa.region === testOlfa.region){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.region);

            if(olfa.part_plante === testOlfa.part_plante){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.part_plante);

            if(olfa.extraction_mode === testOlfa.extraction_mode){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.extraction_mode);

            if(olfa.aspect === testOlfa.aspect){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.aspect);

            if(olfa.main_constituents === testOlfa.main_constituents){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.main_constituents);

            if(olfa.olfactory_family === testOlfa.olfactory_family){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.olfactory_family);

            if(olfa.descriptors === testOlfa.descriptors){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.descriptors);

            if(olfa.tenacity === testOlfa.tenacity){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.tenacity);

            if(olfa.regulations === testOlfa.regulations){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.regulations);

            if(olfa.average_price === testOlfa.average_price){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.average_price);

            if(olfa.jobs === testOlfa.jobs){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.jobs);

            if(olfa.iconic_perfume === testOlfa.iconic_perfume){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.iconic_perfume);

            if(olfa.rq === testOlfa.rq){
                console.log('bg du con')
            }else
                console.log('t con '+olfa.rq);*/
console.log(olfa)

            var didier = Object.keys(olfa);
            didier = didier.shift();
            console.log(didier)
           // didier = didier.sort();
            console.log(didier)

            var jack = Object.keys(testOlfa);
            jack = jack.sort();
            console.log(jack)
            for(var i=0; i<didier.length; i++){
                //console.log(didier[1])
                console.log(jack[i])
            }



        }
    };

    return(
        <>
            <h2 className={classes.titleSheet}>{olfa.name === null ? 'Nom matière' : props.olfa.name}</h2>
            <div className={classes.sheet}>
                <form onSubmit={handleSubmit}>
                    {console.log(props)}

                        <Field nameField={'Nom'} val={testOlfa} onChange={handleChange} nameValue={'name'}/>
                        <Field nameField={'Nom botanique'} val={testOlfa} onChange={handleChange} nameValue={'botanic_name'}/>
                        <Field nameField={'Nom anglais'} nameValue={'english_name'} val={testOlfa} onChange={handleChange}/>
                        <Field nameField={'Région'} val={testOlfa} onChange={handleChange} nameValue={'region'}/>
                        <Field nameField={'Partie de la plante'} val={testOlfa} onChange={handleChange} nameValue={'part_plante'}/>
                        <Field nameField={'Mode d\'extraction'} val={testOlfa} onChange={handleChange} nameValue={'extraction_mode'}/>
                        <Field nameField={'Aspect'} val={testOlfa} onChange={handleChange} nameValue={'aspect'}/>
                        <Field nameField={'Principaux constituents'} val={testOlfa} onChange={handleChange} nameValue={'main_constituents'}/>
                        <Field nameField={'Famille olfactive'} val={testOlfa} onChange={handleChange} nameValue={'olfactory_family'}/>
                        <Field nameField={'descripteurs'} val={testOlfa} onChange={handleChange} nameValue={'descriptors'}/>
                        <Field nameField={'Ténacité'} val={testOlfa} onChange={handleChange} nameValue={'tenacity'}/>
                        <Field nameField={'Régulation'} val={testOlfa} onChange={handleChange} nameValue={'regulations'}/>
                        <Field nameField={'Prix moyen'} val={testOlfa} onChange={handleChange} nameValue={'average_price'}/>
                        <Field nameField={'Emplois'} val={testOlfa} onChange={handleChange} nameValue={'jobs'}/>
                        <Field nameField={'Parfums emblématuques'} val={testOlfa} onChange={handleChange} nameValue={'iconic_perfume'}/>
                        <Field nameField={'Remaque'} val={testOlfa} onChange={handleChange} nameValue={'rq'}/>


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