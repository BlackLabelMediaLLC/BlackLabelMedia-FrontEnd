import React from 'react';
//import { Link } from 'react-router-dom';

import NavMenuItem from '../NavMenuItem/NavMenuItem';

import data from './data/data.json';

const NavMenu = () => {
    return(
        <nav className='nav-menu' data-testid="nav-menu">
          <ul className='nav-menu-list'>
            {
                data.map((item, idx) => (
                    <li className="nav-menu-item" key={idx}>
                        <NavMenuItem itemName={item.name} navRoute={item.route} />
                    </li>
                ))
            }
          </ul>
        </nav>
    );
}

export default NavMenu;