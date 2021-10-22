import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import '../return.css'

function Tuile(props) {
    const [desc, setDesc] = useState();
    const [colorCard, setColorCard] = useState('white');
    const infoOlfa = props.eachOlfa;

    useEffect(() => {
        if (infoOlfa.descriptors !== undefined)
            setDesc(infoOlfa.descriptors);

        if (infoOlfa.type === 'natural')
            setColorCard('#c9fcc2');
        else if (infoOlfa.type === 'synthetic')
            setColorCard('#cfe7fa');
        else if (infoOlfa.type === 'perfume')
            setColorCard('#FFD8F7');
    }, [infoOlfa, desc !== undefined]);


    return (
        <>

            <Grid item xs={12} sm={6} md={4} xl={2} onClick={props.onClick}>

                <div title={'Fiche ' + infoOlfa.name}>


                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className={"flip-card-front"} style={{backgroundColor: colorCard}}
                                 title={'Fiche ' + infoOlfa.name}>
                                <div>
                                    <img src={'imgMaterial/' + infoOlfa.name + '.jpg'} alt={'image de ' + infoOlfa.name}
                                         className='imgTuile'
                                         style={{height: 200}}/>
                                    <h4 className='titleTuile'>{infoOlfa.name}</h4>
                                </div>
                            </div>
                            <div className="flip-card-back" style={{backgroundColor: colorCard}}>
                                    <h1>{infoOlfa.name}</h1>
                                    <h4 className='subtitleTuile'>{infoOlfa.olfactory_family}</h4>
                                    <h4>descripteurs : {desc !== undefined ? desc.map((d) => (d + ' ')) :
                                        <p>vide</p>}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

        </>
    );
}


export default (Tuile);

