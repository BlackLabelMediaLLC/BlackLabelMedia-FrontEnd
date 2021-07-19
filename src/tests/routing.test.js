import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
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

        userEvent.click(screen.getByText(/home/i),'')
        
        screen.debug();
    })
});