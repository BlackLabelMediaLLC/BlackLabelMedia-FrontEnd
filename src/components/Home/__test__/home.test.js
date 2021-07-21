import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Home from '../Home';

afterEach(cleanup);

describe('Home Component', () => {
    test('Home component renders', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Home/>
            </Router>
        );

        expect(screen.getByTestId('home-page')).toBeInTheDocument();
        screen.debug();
    });

    test('Child components render', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Home />
            </Router>
        );

        expect(screen.getByTestId('main-hero')).toBeInTheDocument();

        screen.debug();
    })
});

