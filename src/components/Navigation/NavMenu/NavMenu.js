import React from 'react';

const NavMenu = () => {
    return(
        <nav className='nav-menu' data-testid="nav-menu">
          <ul className='nav-list'>
              <li className='nav-list-item'>
                <a href='/' className='nav-list-item-link'>home</a>
              </li>
              <li className='nav-list-item'><a href='' className='nav-list-item-link'></a></li>
              <li className='nav-list-item'><a href='' className='nav-list-item-link'></a></li>
              <li className='nav-list-item'><a href='' className='nav-list-item-link'></a></li>
              <li className='nav-list-item'><a href='' className='nav-list-item-link'></a></li>
          </ul>
        </nav>
    );
}

export default NavMenu;