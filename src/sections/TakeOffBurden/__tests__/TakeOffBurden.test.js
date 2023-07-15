import React from 'react';
import { render, screen } from '@testing-library/react';
import TakeOffBurden from '../TakeOffBurden';
import { TestId, ByText } from '../constant';

describe('TakeOffBurden', () => {
  it('renders the component correctly', () => {
    render(<TakeOffBurden />);
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_CONTAINER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_TRANSPARENT_CARD_TEST_ID)).toBeInTheDocument();

    expect(screen.getByText(ByText.TAKEOFFBURDEN_HEADING)).toBeInTheDocument();
    expect(screen.getByText(ByText.TAKEOFFBURDEN_PARAGRAPH)).toBeInTheDocument();

    expect(screen.getByAltText(ByText.TAKEOFFBURDEN_ARROW)).toBeInTheDocument();

    expect(screen.getByText(ByText.BUTTON_TEXT)).toBeInTheDocument();
  });
});
