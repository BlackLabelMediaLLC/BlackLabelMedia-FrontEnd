import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import NavMenu from '../NavMenu';

afterEach(cleanup);

describe('Rendering NavMenu component', () => {

    test('NavMenu component renders', () => {
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <NavMenu/>
            </Router>
            );
       
        expect(screen.getByTestId('nav-menu')).toBeInTheDocument(); 
        //screen.debug();      
    });

    test('NavMenu renders links.', () => {
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <NavMenu/>
            </Router>
            );

        expect(screen.getByRole('link', {name: 'Home'})).toHaveAttribute('href', '/');
        //screen.debug();
    });
});