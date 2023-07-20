import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from '../Stepper';

it('Stepper component renders correctly', () => {

  render(<Stepper />);

  const backIcon = screen.getByText('Back');
  expect(backIcon).toBeInTheDocument();
 
  const imageElement = screen.getByTestId('backarrow');  
  expect(imageElement).toBeInTheDocument();

  const circularStepper = screen.getByTestId('circular stepper');  
  expect(circularStepper).toBeInTheDocument();
  
  const paragraph1 = screen.getByTestId('step 1');
  expect(paragraph1).toBeInTheDocument();

  const paragraph2 = screen.getByTestId('select stipend category');
  expect(paragraph2).toBeInTheDocument();

  const line = screen.getByTestId('line');
  expect(line).toBeInTheDocument();

  const horizontalStepper = screen.getByTestId('horizontal stepper');  
  expect(horizontalStepper).toBeInTheDocument();
});
