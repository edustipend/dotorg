import React from 'react';
import { render, screen } from '@testing-library/react';
import TakeOffBurden from '../TakeOffBurden';

describe('TakeOffBurden', () => {
  it('renders the component correctly', () => {
    render(<TakeOffBurden />);
    expect(screen.getByTestId('takeoffburden-container')).toBeInTheDocument();
    expect(screen.getByTestId('takeoffburden-Card')).toBeInTheDocument();
    expect(screen.getByTestId('takeoffburden-transparent-Card')).toBeInTheDocument();

    expect(screen.getByText('Take the burden off yourself.')).toBeInTheDocument();
    expect(screen.getByText('Request for learning support and give your learning curve a boost')).toBeInTheDocument();

    expect(screen.getByAltText('arrow')).toBeInTheDocument();

    expect(screen.getByText('Request Stipend')).toBeInTheDocument();
  });
});
