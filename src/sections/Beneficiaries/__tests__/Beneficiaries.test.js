import React from 'react';
import { render, screen } from '@testing-library/react';
import Beneficiaries from '../Beneficiaries';
import { Text, TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Beneficiaries', () => {
  it('renders the component', () => {
    render(
      <BrowserRouter>
        <Beneficiaries />
      </BrowserRouter>
    );
    // Test the presence of a header element
    const headerElement = screen.getByTestId(TestId.HEADER_TEST_ID);
    expect(headerElement).toBeInTheDocument();

    const mobileHeaderElement = screen.getByTestId(TestId.HEADER_MOBILE_TEST_ID);
    expect(mobileHeaderElement).toBeInTheDocument();

    // Test the presence of a subheader element
    const subheaderElement = screen.getByTestId(TestId.SUB_HEADER_TEST_ID);
    expect(subheaderElement).toBeInTheDocument();

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
    expect(screen.queryAllByText(Text.BUTTON_TEXT)).toHaveLength(2);
  });
});
