import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavMenu from '../NavMenu';

afterEach(cleanup);

describe('Rendering NavMenu component', () => {

    test('NavMenu component renders', () => {
        const { getByRole } = render(<NavMenu/>);

        
    });

});