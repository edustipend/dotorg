import React from 'react';
import { render, screen } from '@testing-library/react';
import TakeOffBurden from '../TakeOffBurden';
import { TestId, TextCopy } from '../constants';
import { ModalContextProvider } from '../../../context/ModalContext';

describe('TakeOffBurden', () => {
  it('renders the component correctly', () => {
    render(
      <ModalContextProvider>
        <TakeOffBurden />
      </ModalContextProvider>
    );
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_CONTAINER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_TRANSPARENT_CARD_TEST_ID)).toBeInTheDocument();

    expect(screen.getByText(TextCopy.TAKEOFFBURDEN_HEADING)).toBeInTheDocument();
    expect(screen.getByText(TextCopy.TAKEOFFBURDEN_PARAGRAPH)).toBeInTheDocument();

    expect(screen.getByAltText(TextCopy.TAKEOFFBURDEN_ARROW)).toBeInTheDocument();

    // expect(screen.getByText(ButtonLabelCopy.WINDOW_CLOSED)).toBeInTheDocument();
  });
});
