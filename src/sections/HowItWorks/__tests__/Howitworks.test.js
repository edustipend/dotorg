import React from 'react';
import { render, screen } from '@testing-library/react';
import HowItWorks from '../Howitworks';
import { Text, TestId  } from '../constants';


describe('HowItWorks', () => {
  it('renders component', () => {
    render(<HowItWorks />);
  });

  it('displays the correct header text', () => {
    render(<HowItWorks />);
    const headerText = screen.getByText(Text.headerText);
    expect(headerText).toBeInTheDocument();
  });

  it('displays the 3Rs subheader', () => {
    render(<HowItWorks />);
    const subheader = screen.getByText(Text.subheader);
    expect(subheader).toBeInTheDocument();
  });

  it('renders the correct number of RRRR cards', () => {
    render(<HowItWorks />);
    const rrrrCards = screen.getAllByTestId(TestId.rrrrCards);
    expect(rrrrCards.length).toBe(4);
  });
});
