import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";

const styles = (theme) => ({
    titleSheet:{
        textTransform: 'uppercase',
    },
    sheet: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 10,
    },
    listSheet:{
        listStyle: 'none',
        padding: 0,
        "& li":{
            margin: '20px 40px',
        }
    },
    placeButtonSheet:{
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    buttonSheet: {
        border: 'none',
        margin: "10px 40px",
        padding: 10,
        borderRadius: 10,
        background: theme.palette.primary.main,
        boxShadow:  '3px 3px 10px #7e888f, -3px -3px 10px #ffffff',
        '&:active': {
            boxShadow: 'inset 3px 3px 10px #7e888f, inset -3px -3px 10px #ffffff',
        },
    },
});

function Sheet(props) {
    const {classes} = props;
    const[uneFois, setUnefois]= useState(true);
    const[nameOlfa, setNameOlfa]= useState("");
    const [donneeLearnOlfa, setDonneeLearnOlfa] = useState({});



    useEffect(()=>{
        setDonneeLearnOlfa(props.name);
      /*  axios.get("http://localhost:8080/learn", {params: {name: props.name}})
            .then((res) => {
                setDonneeLearnOlfa(res.data);
            }).catch((err) => {
            console.log("ERR : ", err)
        })
        console.log('donneeLearnOlfa');
        console.log(donneeLearnOlfa.type);*/
    });


    return(
        <>
            <h2 className={classes.titleSheet}>{donneeLearnOlfa.name}</h2>
            <div className={classes.sheet}>

                    {
                        donneeLearnOlfa.type === 'natural' ?
                        <ul className={classes.listSheet}>
                            <li>Nom : {donneeLearnOlfa.name}</li>
                            <li>Nom anglais : {donneeLearnOlfa.english_name}</li>
                            <li>Nom botanique : {donneeLearnOlfa.botanic_name}</li>
                            <li>Région : {donneeLearnOlfa.region}</li>
                            <li>Partie de la plante : {donneeLearnOlfa.part_plante}</li>
                            <li>Mode d'extraction : {donneeLearnOlfa.extraction_mode}</li>
                            <li>Aspect : {donneeLearnOlfa.aspect}</li>
                            <li>Principaux constituents : {donneeLearnOlfa.main_constituents}</li>
                            <li>Famille olfactive : {donneeLearnOlfa.olfactory_family}</li>
                            <li>descripteurs : {donneeLearnOlfa.descriptors}</li>
                            <li>Ténacité : {donneeLearnOlfa.tenacity}</li>
                            <li>Régulation : {donneeLearnOlfa.regulations}</li>
                            <li>Prix moyen : {donneeLearnOlfa.average_price}€</li>
                            <li>Emplois : {donneeLearnOlfa.jobs}</li>
                            <li>Parfums emblématuques : {donneeLearnOlfa.iconic_perfume}</li>
                            <li>Remaque : {donneeLearnOlfa.rq}</li>
                        </ul>
                        : <p></p>
                    }


                {
                    donneeLearnOlfa.type === 'synthetic' ?
                        <ul className={classes.listSheet}>
                            <li>Autres noms :</li>
                            <li>Société</li>
                            <li>Nom INC</li>
                            <li>Identique nature</li>
                            <li>Date Synthese</li>
                            <li>Famille olfactive</li>
                            <li>Descritpteurs</li>
                            <li>Ténacité</li>
                        </ul> :
                        <p></p>
                }

                {
                    donneeLearnOlfa.type === 'perfume' ?
                        <ul className={classes.listSheet}>
                            <li>Autres noms :</li>
                            <li>Société</li>
                            <li>Nom INC</li>
                            <li>Identique nature</li>
                            <li>Date Synthese</li>
                            <li>Famille olfactive</li>
                            <li>Descritpteurs</li>
                            <li>Ténacité</li>
                        </ul> :
                        <p></p>
                }

                <div className={classes.placeButtonSheet}>
                    <button className={classes.buttonSheet} onClick={props.onClick}>Tester</button>
                </div>

            </div>
        </>
    );
}

Sheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sheet);