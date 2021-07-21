import React from 'react';
import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '../App';


afterEach(cleanup);

describe('Routing of main navigation components', () => {

    //test app render/navigation
    test('App rendering w/navigating', () => {
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <App/>
            </Router>
            );
        
        expect(screen.getByText(/home/i)).toBeInTheDocument();

        fireEvent.click(screen.getByText(/Home/i));
        
        expect(screen.getByTestId('home-page')).toBeInTheDocument();

        //screen.debug();
    });

    test('landing on a bad path/url', () => {
        const history = createMemoryHistory();
        history.push('/fresh/test');
        render(
            <Router history={ history }>
                <App/>
            </Router>
            );
        expect(screen.getByText(/404 Error. Page Unavailable/i)).toBeInTheDocument();
        //screen.debug();   
    });
});