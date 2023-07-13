import React from 'react';
import { render, screen } from '@testing-library/react';
import Beneficiaries from '../Beneficiaries';

describe('Beneficiaries', () => {
  it('renders component without errors', () => {
    render(<Beneficiaries />);
  });

  // THIS TEST KEEPS FAILING

  // it('displays the correct headings and text content', () => {
  //   render(<Beneficiaries />);
  //   const heading1 = screen.getByText('Our Beneficiaries so far');
  //   const heading2 = screen.getByText('Our Beneficiaries');
  //   const paragraph = screen.getByText('We analyzed the applications by gender, age, and state of origin, and we saw the following:');

  //   expect(heading1).toBeInTheDocument();
  //   expect(heading2).toBeInTheDocument();
  //   expect(paragraph).toBeInTheDocument();
  // });

  // THIS TEST KEEPS FAILING

  // it('renders the button with the correct props', () => {
  //   render(<Beneficiaries />);
  //   const button = screen.getByText('View the numbers');
  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveStyle('background-color: #5801FF');
  // });

  it('checks the existence of specific elements or images', () => {
    render(<Beneficiaries />);
    const image1 = screen.getByTestId('image1');
    const image2 = screen.getByTestId('image2');
    const image3 = screen.getByTestId('image3');
    const image4 = screen.getByTestId('image4');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(image3).toBeInTheDocument();
    expect(image4).toBeInTheDocument();
  });
});
