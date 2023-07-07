import React from 'react';
import { render, screen } from '@testing-library/react';
import HowItWorks from '../Howitworks';

describe('HowItWorks', () => {
  it('renders component', () => {
    render(<HowItWorks />);
  });

  it('displays the correct header text', () => {
    render(<HowItWorks />);
    const headerText = screen.getByText('How it Works');
    expect(headerText).toBeInTheDocument();
  });

  it('displays the 3Rs subheader', () => {
    render(<HowItWorks />);
    const subheader = screen.getByText('The 3Rs: Request, Review, Receive');
    expect(subheader).toBeInTheDocument();
  });

  it('renders the correct number of RRRR cards', () => {
    render(<HowItWorks />);
    const rrrrCards = screen.getAllByTestId('rrrr-card');
    expect(rrrrCards.length).toBe(4);
  });
});
