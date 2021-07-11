//Test of Navigation Component
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navigation from '../Navigation';

//test that Navigation component renders
test('Navigation renders with correct components/text', () => {
    const component = render(<Navigation />);
    screen.debug();
})