//Test of Navigation Component
import React from 'react';
import {cleanup, render, screen, fireEvent, getByRole} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Navigation from '../Navigation';
import App from '../../../App';

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


describe('Navigation Integration', () => {

test('Clicking nav link renders nav components', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <App />
        </Router>
    );
    userEvent.click(screen.getByRole('link', {name: 'About'}));
    expect(screen.getByText(/404 Error. Page Unavailable/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', {name: 'Home'}));
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
    screen.debug();
});

});