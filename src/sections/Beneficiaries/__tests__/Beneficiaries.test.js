import React from 'react';
import { render, screen } from '@testing-library/react';
import Beneficiaries from '../Beneficiaries';
import { Text, TestId } from '../contants';

describe('Beneficiaries', () => {
  it('renders the component', () => {
    render(<Beneficiaries />);
    // Test the presence of a header element
    const headerElement = screen.findAllByText(Text.HEADER_TEXT);
    expect(headerElement).toBeInTheDocument();

    // Test the presence of a subheader element
    const subheaderElement = screen.getByText(Text.SUBHEADER_TEXT);
    expect(subheaderElement).toBeInTheDocument();

    // Test the presence of a text element
    const textElement = screen.getByText(Text.PARAGRAPH_TEXT);
    expect(textElement).toBeInTheDocument();

    // Test the presence of four images
    const image1Element = screen.getByTestId(TestId.IMG1_TEST_ID);
    expect(image1Element).toBeInTheDocument();

    const image2Element = screen.getByTestId(TestId.IMG2_TEST_ID);
    expect(image2Element).toBeInTheDocument();

    const image3Element = screen.getByTestId(TestId.IMG3_TEST_ID);
    expect(image3Element).toBeInTheDocument();

    const image4Element = screen.getByTestId(TestId.IMG4_TEST_ID);
    expect(image4Element).toBeInTheDocument();

    // Test the presence of a "View the numbers" button
    expect(screen.getByText(Text.BUTTON_TEXT)).toBeInTheDocument();
  });
});
