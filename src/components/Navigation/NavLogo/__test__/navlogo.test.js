import React from 'react';
import {getByTestId, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import NavLogo from '../NavLogo';

//render NavLogo Component before all tests
beforeAll(() => {
    render(<NavLogo/>);
});

//test that NavLogo Component renders
test('NavLogo component renders', () =>{
    const navLogoEl = screen.getByTestId('nav-logo');
    expect(navLogoEl.className).toBe('nav-logo');
});