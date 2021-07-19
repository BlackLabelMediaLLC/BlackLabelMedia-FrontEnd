import React from 'react';

const NavLogo = () => {
    return(
        <div className='nav-logo' data-testid='nav-logo'>
            <a href='/' id='nav-logo-txt' data-testid='nav-logo-txt'>
                Black Label <span id='brand-gold-color'>Media </span> 
            </a>
        </div>
    );
}

export default NavLogo;