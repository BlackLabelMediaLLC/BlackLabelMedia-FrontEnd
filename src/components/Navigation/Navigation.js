import React from 'react';

import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';
    
const Navigation =  () => {
    return (
        <header className='navigation' data-testid="navigation">
            <NavLogo />
            <NavMenu />
        </header>
    );
}

export default Navigation;