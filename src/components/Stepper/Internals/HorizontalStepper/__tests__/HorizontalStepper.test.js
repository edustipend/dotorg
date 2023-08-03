import React from 'react';
import { render, screen } from '@testing-library/react';
import HorizontalStepper from '../HorizontalStepper';
import { stepsData } from '../../../constants';
import { TestId } from '../../../constants';

test('renders HorizontalStepper with correct activeStep value', () => {
  render(<HorizontalStepper activeStep={1} stepsData={stepsData} />);
  const activeStep = screen.getByTestId(TestId.HORIZONTAL_STEPPER_TEST_ID);
  expect(activeStep).toHaveTextContent('1');
});

test('renders HorizontalStepper with correct totalSteps value', () => {
  render(<HorizontalStepper activeStep={1} stepsData={stepsData} />);
  const totalSteps = screen.getByTestId(TestId.HORIZONTAL_STEPPER_TEST_ID);
  expect(totalSteps.children.length).toBe(5);
});
