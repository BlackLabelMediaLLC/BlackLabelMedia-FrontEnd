import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../Home';

afterEach(cleanup);

describe('Home Component', () => {
    test('Home component renders', () => {
        render(<Home/>);

        expect(screen.getByRole('main')).toBeInTheDocument();
        // screen.debug();
    });

    test('Child components render', () => {
        render(<Home />);

        expect(screen.getByTestId('main-hero')).toBeInTheDocument();

        // screen.debug();
    })
});

