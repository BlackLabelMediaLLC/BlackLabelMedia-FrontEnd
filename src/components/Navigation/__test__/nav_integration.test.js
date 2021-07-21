//Test of Navigation Component
import React from 'react';
import {cleanup, render, screen, fireEvent, getByRole} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '../../../App';

afterEach(cleanup);


describe('Navigation Integration', () => {

test('Clicking nav link renders nav components', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <App />
        </Router>
    );

    //checks for bad url links
    userEvent.click(screen.getByRole('link', {name: 'About'}));
    expect(screen.getByText(/404 Error. Page Unavailable/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', {name: 'Home'}));
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
    screen.debug();
});

});