import React from 'react';
import { Link } from 'react-router-dom';


const NavMenuItem = ({itemName, navRoute}) => {
    return(
        <>
            <Link className='nav-menu-link hvr-underline-from-center' data-testid="navmenu-item" to={navRoute}>{itemName}</Link>
        </>
    )
}

export default NavMenuItem;