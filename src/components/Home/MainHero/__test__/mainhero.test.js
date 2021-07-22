
import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MainHero from '../MainHero';

afterEach(cleanup);

describe('Main Hero', () => {

    test('Main Hero renders', () => {
        render(<MainHero />);
        expect(screen.getByTestId('main-hero')).toBeInTheDocument();
        
        screen.debug();
    });

    test('Main Hero content wrapper renders', () => {
        render(<MainHero/>);

        expect(screen.getByTestId('main-hero')).toContainElement(screen.getById('hero-content-wrapper'));
        screen.debug();
    });

    test('Main hero background image & text renders', () => {
        render(<MainHero/>);
        expect(screen.getByTestId('main-hero')).toHaveStyle('background-image: url("../images/static-hero-img.png")');
        screen.debug();
    });

    test('Main Hero Heading', () => {
        render(<MainHero />);
        expect(screen.getByTestId('main-hero')).toContainElement(screen.getByRole('heading', {level: 1}));
        screen.debug();
    }); 


});