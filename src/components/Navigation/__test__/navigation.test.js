//Test of Navigation Component
import React from 'react';
import {getByTestId, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navigation from '../Navigation';

//component render placeholder for beforeAll function
let component;

beforeAll(() => {
    component = render(<Navigation />);
} )

//test that Navigation component renders
test('Navigation renders with correct class', () => {
    const navElement = component.getByTestId('navigation');

    //expects className = navigation to be true.
    expect(navElement.className).toBe('navigation');    
    
    screen.debug();
});

test('Navigation renders NavLogo & NavMenu components ', () => {
  const navLogoElement = component.getByTestId('nav-logo');
  const navMenuElement =  component.getByTestId('nav-menu');

  expect(navLogoElement.className).toBe('nav-logo');
  expect(navMenuElement.className).toBe('nav-menu');

})