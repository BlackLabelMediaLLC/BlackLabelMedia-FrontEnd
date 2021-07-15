import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import NavLogo from '../NavLogo';

afterEach(cleanup);

describe('NavLogo Component', () =>{

        test('NavLogo Renders', () => {
            const { getByTestId } = render(<NavLogo/>);

            expect( getByTestId('nav-logo')).toBeInTheDocument();
            screen.debug();
        });

        test('NavLogo renders link to page', () => {
            const { getByRole } = render(<NavLogo />);

            expect(getByRole('link')).toHaveAttribute('href', '/');
          
        });



});
