//Test of Navigation Component
import React from 'react';
import {getByTestId, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navigation from '../Navigation';

//test that Navigation component renders
test('Navigation renders with correct class', () => {
    const component = render(<Navigation />);
    const navElement = component.getByTestId('navigation');

    //expects className = navigation to be true.
    expect(navElement.className).toBe('navigation');    
    
    screen.debug();
})