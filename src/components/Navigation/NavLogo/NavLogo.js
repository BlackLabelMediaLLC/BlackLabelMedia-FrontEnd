import React from 'react';

const NavLogo = ( {logoText} ) => {
    return(
        <div className='nav-logo' data-testid='nav-logo'>
            <a href='/' id='nav-logo-txt' data-testid='nav-logo-txt'>{logoText}</a>
        </div>
    );
}

export default NavLogo;