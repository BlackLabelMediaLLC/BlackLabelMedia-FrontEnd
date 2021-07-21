import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import NavMenuItem from '../NavMenuItem';
import App from '../../../../App';

import data from '../../NavMenu/data/data.json'

afterEach(cleanup);

describe('NavMenuItem Renders', () => {
   
    test('NavMenuItem renders with props', () => {
        const myData = data;
        const history = createMemoryHistory();
        render(
            <Router history={ history }>
                <NavMenuItem itemName={myData[0].name} navRoute={myData[0].route}/>
            </Router>
            );
        
        //Expects NavMenuItem to render
        expect(screen.getByTestId('navmenu-item')).toBeInTheDocument();

        //Expects a Link to render with props
        expect(screen.getByRole('link', {name: myData[0].name})).toHaveTextContent(myData[0].name);
        
        //Expects a Link to render route props
        expect(screen.getByRole('link')).toHaveAttribute('href', myData[0].route);

        //screen.debug();
    });

});

