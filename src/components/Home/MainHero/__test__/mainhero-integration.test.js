import React from 'react';
import {cleanup, render, screen, fireEvent, getByRole} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '../../../../App';

afterEach(cleanup);

describe('Main Hero Integration', () => {


    test('Clicking Button redirects to set route', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );

        expect(screen.getByTestId('main-hero')).toContainElement(screen.getByRole('button'));

        userEvent.click(screen.getByText(/check out our services/i));
        expect(screen.getByTestId('services-page')).toBeInTheDocument();

        screen.debug();
    });
});