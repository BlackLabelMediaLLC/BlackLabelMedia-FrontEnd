//Test of Navigation Component
import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Navigation from '../Navigation';

afterEach(cleanup);

describe('Rendering Navigation Component', () => {

    //Navigation Component Renders
    test('Navigation component renders', () => {
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <Navigation/>
            </Router>
            );
        expect(screen.getByTestId('navigation')).toBeInTheDocument();
        
        //screen.debug();
    });

    //Child components render
    test('Children components render', () => {
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <Navigation/>
            </Router>
            );

        //test Nav-Logo child component renders.
        expect(screen.getByTestId('nav-logo')).toBeInTheDocument();

        //test Nav-Menu child component renders
        expect(screen.getByTestId('nav-menu')).toBeInTheDocument();

        //screen.debug();
    });
});
