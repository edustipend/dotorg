import React from 'react';
import { render, screen } from '@testing-library/react';
import TakeOffBurden from '../TakeOffBurden';

describe('TakeOffBurden', () => {
  it('renders the component correctly', () => {
    render(<TakeOffBurden />);

    // Assert that the main container is rendered
    expect(screen.getByTestId('takeoffburden-container')).toBeInTheDocument();

    // Assert that the card elements are rendered
    expect(screen.getByTestId('takeoffburden-Card')).toBeInTheDocument();
    expect(screen.getByTestId('takeoffburden-transparent-Card')).toBeInTheDocument();

    // Assert that the text content is rendered
    expect(screen.getByText('Take the burden off yourself.')).toBeInTheDocument();
    expect(screen.getByText('Request for learning support and give your learning curve a boost')).toBeInTheDocument();

    // Assert that the arrow image is rendered
    expect(screen.getByAltText('arrow')).toBeInTheDocument();

    // Assert that the button is rendered
    expect(screen.getByText('Request Stipend')).toBeInTheDocument();
  });
});