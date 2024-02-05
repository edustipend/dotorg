import React from 'react';
import { render, screen } from '@testing-library/react';
import CircularStepper from '../CircularStepper';
import { stepsData } from '../../../constants';
import { TestId } from '../../../constants';
import { Provider } from 'react-redux';
import store from '../../../../../store';


test('renders CircularStepper with correct activeStep value', () => {
  render(
    <Provider store={store}>
      <CircularStepper activeStep={1} stepsData={stepsData} />
    </Provider>
  );
  const activeStep = screen.getByTestId(TestId.CIRCULAR_STEPPER_TEST_ID);
  expect(activeStep).toHaveTextContent('1');
});

test('renders CircularStepper with correct totalSteps value', () => {
  render(
    <Provider store={store}>
      <CircularStepper activeStep={1} stepsData={stepsData} />
    </Provider>
  );
  const totalSteps = screen.getByTestId(TestId.CIRCULAR_STEPPER_TEST_ID);
  expect(totalSteps.children.length).toBe(1);
});
