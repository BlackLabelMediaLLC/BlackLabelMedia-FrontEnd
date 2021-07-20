import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return(
        <nav className='nav-menu' data-testid="nav-menu">
          <ul className='nav-menu-list'>
              <Link className='nav-menu-item hvr-underline-from-center' to='/'>Home</Link>
              <Link className='nav-menu-item hvr-underline-from-center' to='/services'>Services</Link>
              <Link className='nav-menu-item hvr-underline-from-center' to='/community'>Community</Link>
              <Link className='nav-menu-item hvr-underline-from-center' to='/about'>About</Link>
              <Link className='nav-menu-item hvr-underline-from-center' to='/contact'>Contact</Link>
              <Link className='nav-menu-item hvr-underline-from-center' to='/signup'>Register</Link>
              <Link className='nav-menu-item hvr-underline-from-center' to='/login'>Login</Link>
          </ul>
        </nav>
    );
}

export default NavMenu;