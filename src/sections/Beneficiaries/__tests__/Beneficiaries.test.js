import React from 'react';
import { render, screen } from '@testing-library/react';
import Beneficiaries from '../Beneficiaries';
import { images } from '../contants';

describe('Beneficiaries', () => {
  test('renders the component', () => {
    render(<Beneficiaries />);
    // Test the presence of a header element
    // const headerElement = screen.findAllByText('Our Beneficiaries so far');
    // expect(headerElement).toBeInTheDocument();

    // Test the presence of a subheader element
    // const subheaderElement = screen.getByText('Our Beneficiaries');
    // expect(subheaderElement).toBeInTheDocument();

    // Test the presence of a text element
    // const textElement = screen.getByText('We analysed the applications by gender, age, and state of origin, and we saw the following:');
    // expect(textElement).toBeInTheDocument();

    // Test the presence of four images
    const image1Element = screen.getByTestId(images.image1);
    expect(image1Element).toBeInTheDocument();

    const image2Element = screen.getByTestId(images.image2);
    expect(image2Element).toBeInTheDocument();

    const image3Element = screen.getByTestId(images.image3);
    expect(image3Element).toBeInTheDocument();

    const image4Element = screen.getByTestId(images.image4);
    expect(image4Element).toBeInTheDocument();

    // Test the presence of a "View the numbers" button
    // const buttonElement = screen.getByText('View the numbers');
    // expect(buttonElement).toBeInTheDocument();
  });
});
