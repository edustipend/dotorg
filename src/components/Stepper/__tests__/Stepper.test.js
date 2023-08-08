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

  const title = screen.getByTestId(TestId.TITLE_TEST_ID);
  expect(title).toBeInTheDocument();

  const paragraph = screen.getByTestId(TestId.PARAGRAPH_TEST_ID);
  expect(paragraph).toBeInTheDocument();

  const horizontalStepper = screen.getByTestId(TestId.HORIZONTAL_STEPPER_TEST_ID);
  expect(horizontalStepper).toBeInTheDocument();
});
