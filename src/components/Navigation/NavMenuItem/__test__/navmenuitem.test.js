import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import NavMenuItem from '../NavMenuItem';

afterEach(cleanup);

describe('NavMenuItem Renders', () => {
   
    test('NavMenuItem renders with props', () => {
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <NavMenuItem itemName={'test'} navRoute={'/test'}/>
            </Router>
            );
        
        //Expects NavMenuItem to render
        expect(screen.getByTestId('navmenu-item')).toBeInTheDocument();

        //Expects a Link to render with props
        expect(screen.getByRole('link', {name: 'test'})).toHaveTextContent('test');
        
        //Expects a Link to render route props
        expect(screen.getByRole('link')).toHaveAttribute('href', '/test');

        //screen.debug();
    });

})