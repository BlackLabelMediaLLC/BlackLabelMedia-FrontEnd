//Test of Navigation Component
import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navigation from '../Navigation';

afterEach(cleanup);

describe('Rendering Navigation Component', () => {

    //Navigation Component Renders
    test('Navigation component renders', () => {
        const { getByTestId } = render(<Navigation/>);
        expect(getByTestId('navigation')).toBeInTheDocument();
        
        //screen.debug();
    });

    //Child components render
    test('Children components render', () => {
        const { getByTestId } = render(<Navigation/>);

        //test Nav-Logo child component renders.
        expect(getByTestId('nav-logo')).toBeInTheDocument();

        //test Nav-Menu child component renders
        expect(getByTestId('nav-menu')).toBeInTheDocument();

        //screen.debug();
    });
});
