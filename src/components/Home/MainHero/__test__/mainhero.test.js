
import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MainHero from '../MainHero';

afterEach(cleanup);

describe('Main Hero', () => {

    test('Main Hero renders', () => {
        render(<MainHero />);

        expect(screen.getByTestId('main-hero')).toBeInTheDocument();
    });
});