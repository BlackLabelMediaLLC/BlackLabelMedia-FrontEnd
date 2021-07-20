import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return(
        <nav className='nav-menu' data-testid="nav-menu">
          <ul className='nav-menu-list'>
              <Link className='nav-menu-item' to='/'>home</Link>
              <Link className='nav-menu-item' to='/services'>services</Link>
              <Link className='nav-menu-item' to='/community'>community</Link>
              <Link className='nav-menu-item' to='/about'>about</Link>
              <Link className='nav-menu-item' to='/contact'>contact</Link>
          </ul>
        </nav>
    );
}

export default NavMenu;