import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from '../Stepper';
import { Text, TestId } from '../constants';

it('Stepper component renders correctly', () => {

  render(<Stepper />);

  const backText = screen.getByText(Text.BACK_ICON_TEXT);
  expect(backText).toBeInTheDocument();
 
  const backIcon = screen.getByTestId(TestId.BACK_ICON_TEST_ID);  
  expect(backIcon).toBeInTheDocument();

  const circularStepper = screen.getByTestId(TestId.CIRCULAR_STEPPER_TEST_ID);  
  expect(circularStepper).toBeInTheDocument();
  
  const paragraph1 = screen.getByTestId(TestId.PARAGRAPH_1_TEST_ID);
  expect(paragraph1).toBeInTheDocument();

  const paragraph2 = screen.getByTestId(TestId.PARAGRAPH_2_TEST_ID);
  expect(paragraph2).toBeInTheDocument();

  const line = screen.getByTestId(TestId.LINE_TEST_ID);
  expect(line).toBeInTheDocument();

  const horizontalStepper = screen.getByTestId(TestId.HORIZONTAL_STEPPER_TEST_ID);  
  expect(horizontalStepper).toBeInTheDocument();
});
