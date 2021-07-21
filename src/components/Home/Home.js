import React from 'react';

import MainHero from './MainHero/MainHero';

const Home =  () => {
    return(
        <main className='main' data-testid='home-page'>
            <MainHero/>
        </main>
    );
}

export default Home;