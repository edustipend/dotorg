import React from 'react';
import { render, screen } from '@testing-library/react';
import Eligibility from '../Eligibility';
import { elgibilityCriteria, cardData } from '../constant';

describe('Eligibility Component', () => {
  beforeEach(() => {
    render(<Eligibility />);
  });

  test('renders the section title', () => {
    const title = screen.getByRole('heading', { name: elgibilityCriteria.title });
    expect(title).toBeInTheDocument();
  });

  test('renders the section description', () => {
    const description = screen.getByText(elgibilityCriteria.description);
    expect(description).toBeInTheDocument();
  });

  test('renders all community cards', () => {
    cardData.forEach(({ title, description }) => {
      const cardTitle = screen.getByRole('heading', { name: title });
      const cardDesc = screen.getByText(description);
      expect(cardTitle).toBeInTheDocument();
      expect(cardDesc).toBeInTheDocument();
    });
  });

  test('renders exactly 6 cards', () => {
    const cards = screen.getAllByRole('heading', { level: 3 });
    expect(cards).toHaveLength(6);
  });
});
