import React from 'react';
import { render, screen } from '@testing-library/react';
import TakeOffBurden from '../TakeOffBurden';
import { TestId, ByClassName, ByText } from '../constant';
import arrow from "../../../assets/burdenarrow.png"


describe('TakeOffBurden', () => {
  test('renders component without errors', () => {
    render(<TakeOffBurden />);
  });

  it('displays the correct text content', () => {
    render(<TakeOffBurden />);
    const heading = screen.getByText(ByText.TAKEOFFBURDEN_HEADING);
    const paragraph = screen.getByText(ByText.TAKEOFFBURDEN_PARAGRAPH);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the image correctly', () => {
    render(<TakeOffBurden />);
    const image = screen.getByTestId(TestId.TAKEOFFBURDEN_ARROW);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', arrow);
    expect(image).toHaveAttribute('alt', 'arrow');
  });

  it('applies the correct CSS classes', () => {
    render(<TakeOffBurden />);
    const container = screen.getByTestId(TestId.TAKEOFFBURDEN_CONTAINER_TEST_ID);
    const card = screen.getByTestId(TestId.TAKEOFFBURDEN_CARD_TEST_ID);
    const transparentCard = screen.getByTestId(TestId.TAKEOFFBURDEN_TRANSPARENT_CARD_TEST_ID);
    const requestButton = screen.getByText(TestId.REQUEST_STIPEND_TEST_ID);

    expect(container).toHaveClass(ByClassName.TAKEOFFBURDEN_CONTAINER);
    expect(card).toHaveClass(ByClassName.TAKEOFFBURDEN_CARD);
    expect(transparentCard).toHaveClass(ByClassName.TAKEOFFBURDEN_TRANSPARENT_CARD);
    expect(requestButton).toHaveClass(ByClassName.TAKEOFFBURDEN_REQUEST);
  });
});
