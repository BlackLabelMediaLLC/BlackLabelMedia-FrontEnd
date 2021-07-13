//Test of Navigation Component
import React from 'react';
import {render, screen} from '@testing-library/react';
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

