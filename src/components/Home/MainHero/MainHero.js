import React, {useEffect, useState } from 'react';

import heroImg from './images/static-hero-img.jpg';

import axios from 'axios';

import HeroContentWrapper from './HeroContentWrapper';


const MainHero = () => {
    const [data, setData] = useState('');

    useEffect(() => {
         axios.get('./data.json')
        .then(res => res.data)
        .then( data => {
            console.log(data);
            setData(data);
        });
    }, []);

    const styleDiv = {
        backgroundImage: 'url(' + heroImg + ')'
    }

    return(
        <section className='main-hero' data-testid='main-hero' style={styleDiv}>
            <HeroContentWrapper/>
        </section>
    )
}

export default MainHero;