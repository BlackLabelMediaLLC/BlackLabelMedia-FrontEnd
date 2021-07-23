import React from 'react';
import HeroContentWrapper from './HeroContentWrapper';

const MainHero = () => {
    return(
        <section className='main-hero' data-testid='main-hero'>
            <HeroContentWrapper/>
        </section>
    )
}

export default MainHero;