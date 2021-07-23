import React, {useEffect, useState } from 'react';

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

    return(
        <section className='main-hero' data-testid='main-hero' >
            <HeroContentWrapper/>
        </section>
    )
}

export default MainHero;