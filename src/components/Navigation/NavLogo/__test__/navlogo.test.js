import React from 'react';
import { render, screen, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavLogo from '../NavLogo';

afterEach(cleanup);

describe('NavLogo Component', () =>{

        //Checks NavLogo renders
        test('NavLogo Renders', () => {
            const { getByTestId } = render(<NavLogo/>);

            expect( getByTestId('nav-logo')).toBeInTheDocument();
            screen.debug();
        });

        //checks that NavLogo test is a link
        test('NavLogo renders link to page', () => {
            const { getByRole } = render(<NavLogo />);

            expect(getByRole('link')).toHaveAttribute('href', '/');
            screen.debug()
        });

        //chech that NavLogo recieves logo text props
        test('NavLogo renders props to page', () => {
            const { getByText} = render(<NavLogo logoText={'My Logo'}/>);

            expect(getByText(/My Logo/i)).toBeInTheDocument();
            screen.debug();
        });
});
