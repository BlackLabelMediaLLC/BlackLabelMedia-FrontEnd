import React from 'react';

import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';


const Navigation =  () => {
    return (
        <div className='navigation' data-testid="navigation">
            <NavLogo logoText={'Black Label Media'} />
            <NavMenu />
        </div>
    );
}

export default Navigation;