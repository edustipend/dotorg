import React from 'react';
import { render, screen } from '@testing-library/react';
import HorizontalStepper from '../HorizontalStepper';
import { stepsData } from '../../../constants';
import { TestId } from '../../../constants';
import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
import store from '../../../../../store';

test('renders HorizontalStepper with correct activeStep value', () => {
  render(

    <Provider store={store}>
      <HorizontalStepper activeStep={1} stepsData={stepsData} />
    </Provider>
  );
  const activeStep = screen.getByTestId(TestId.HORIZONTAL_STEPPER_TEST_ID);
  expect(activeStep).toHaveTextContent('1');
});

test('renders HorizontalStepper with correct totalSteps value', () => {
  render(
    <Provider store={store}>
      <HorizontalStepper activeStep={1} stepsData={stepsData} />
    </Provider>
  );
  const totalSteps = screen.getByTestId(TestId.HORIZONTAL_STEPPER_TEST_ID);
  expect(totalSteps.children.length).toBe(5);
});
