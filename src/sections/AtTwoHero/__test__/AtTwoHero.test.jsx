import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AtTwoHero from '../AtTwoHero';

describe('AtTwoHero component', () => {
  test('renders the hero title', () => {
    render(<AtTwoHero />);
    const titleElement = screen.getByText(/Edustipend is 2!!!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the hero paragraph', () => {
    render(<AtTwoHero />);
    const paragraphElement = screen.getByText(/As part of our second anniversary celebration, we're giving away 22 laptops to 22 lucky winners!/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders the "How to win" button', () => {
    render(<AtTwoHero />);
    const buttonElement = screen.getByText(/How to win/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
