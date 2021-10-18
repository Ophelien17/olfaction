import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    const [donneeLearnOlfa, setDonneeLearnOlfa] = useState({});
    const [desc, setDesc] = useState();
    const [region, setRegion] = useState();
    const [mainConstituents, setMainConstituents] = useState();
    const [iconicPerfume, setIconicPerfume] = useState();


    useEffect(() => {
        setDonneeLearnOlfa(props.name);
    });

    useEffect(()=>{
        if (donneeLearnOlfa.descriptors !== undefined)
            setDesc(donneeLearnOlfa.descriptors);
        /* var descTMP = [];
         if(donneeLearnOlfa.descriptors !== undefined){
             var descriptor = donneeLearnOlfa.descriptors.split(',');
             descriptor.map((d) => {
                 if (d.substr(0, 1) !== " ")
                     descTMP.push(d);
                 else if (d.substr(0, 1) === " ")
                     descTMP.push(d.slice(1));

             });
             setDesc(descTMP);
         }
         console.log('desc')
         console.log(desc)*/

    }, [donneeLearnOlfa, desc !== undefined]);

    useEffect(() => {
        /* var regTMP = [];
         if(donneeLearnOlfa.region !== undefined){
             var reg = donneeLearnOlfa.region.split(',');
             reg.map((r) => {
                 if (r.substr(0, 1) !== " ")
                     regTMP.push(r);
                 else if (r.substr(0, 1) === " ")
                     regTMP.push(r.slice(1));

             });
             setRegion(regTMP);
         }*/

        if (donneeLearnOlfa.region !== undefined)
            setRegion(donneeLearnOlfa.region);
    }, [donneeLearnOlfa, region !== undefined]);

    useEffect(() => {
        if (donneeLearnOlfa.main_constituents !== undefined)
            setMainConstituents(donneeLearnOlfa.main_constituents);
    }, [donneeLearnOlfa, mainConstituents !== undefined]);


    useEffect(() => {
        if (donneeLearnOlfa.iconic_perfume !== undefined)
            setIconicPerfume(donneeLearnOlfa.iconic_perfume);
    }, [donneeLearnOlfa, iconicPerfume !== undefined]);





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
                            <li>Région : {region !== undefined ? <ul>{region.map((r) => (<li>{r}</li>))}</ul> :
                                <p>vide</p>}</li>
                            <li>Partie de la plante : {donneeLearnOlfa.part_plante}</li>
                            <li>Mode d'extraction : {donneeLearnOlfa.extraction_mode}</li>
                            <li>Aspect : {donneeLearnOlfa.aspect}</li>
                            <li>Principaux constituents : {mainConstituents !== undefined ?
                                <ul>{mainConstituents.map((mc) => (<li>{mc}</li>))}</ul> : <p>vide</p>}</li>
                            <li>Famille olfactive : {donneeLearnOlfa.olfactory_family}</li>
                            <li>descripteurs : {desc !== undefined ? <ul>{desc.map((d) => (<li>{d}</li>))}</ul> :
                                <p>vide</p>}</li>
                            <li>Ténacité : {donneeLearnOlfa.tenacity}</li>
                            <li>Régulation : {donneeLearnOlfa.regulations}</li>
                            <li>Prix moyen : {donneeLearnOlfa.average_price}€</li>
                            <li>Emplois : {donneeLearnOlfa.jobs}</li>
                            <li>Parfums emblématiques : {iconicPerfume !== undefined ?
                                <ul>{iconicPerfume.map((ic) => (<li>{ic}</li>))}</ul> : <p>vide</p>}</li>
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