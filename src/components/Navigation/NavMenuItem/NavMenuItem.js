import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';



const NavMenuItem = ({itemName, navRoute}) => {
    return(
        <li className='nav-menu-item' data-testid="navmenu-item">
            <Link className='nav-menu-link hvr-underline-from-center' to={navRoute}>{itemName}</Link>
        </li>
    )
}

export default NavMenuItem;