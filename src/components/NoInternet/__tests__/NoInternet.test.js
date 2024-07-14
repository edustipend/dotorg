import React from 'react';
import { render } from '@testing-library/react';
import NoInternet from '../NoInternet';

describe('NoInternet component', () => {
  it('renders without crashing', () => {
    render(<NoInternet />);
  });
});
