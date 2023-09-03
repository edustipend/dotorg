import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Stepper from '../Stepper';
import {StepperCtx} from '../../../context/StepperContext'; 
import { TestId, Text } from '../constants';

const mockContextValue = {
  activeStep: 1,
};

// Mock the useDispatch function and useNavigate function
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Stepper Component', () => {
  it('renders without errors', () => {
    const { getByTestId, getByText } = render(
      <StepperCtx.Provider value={mockContextValue}>
        <Stepper />
      </StepperCtx.Provider>
    );

    expect(getByTestId(TestId.BACK_ICON_TEST_ID)).toBeInTheDocument();
    expect(getByText(Text.BACK_ICON_TEXT)).toBeInTheDocument();
    expect(getByTestId(TestId.TITLE_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(TestId.PARAGRAPH_TEST_ID)).toBeInTheDocument();
  });

  it('handles click correctly', () => {
    const mockDispatch = jest.fn();
    const mockNavigate = jest.fn();

    jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    const { getByTestId } = render(
      <StepperCtx.Provider value={mockContextValue}>
        <Stepper />
      </StepperCtx.Provider>
    );

    fireEvent.click(getByTestId(TestId.BACK_ICON_TEST_ID));

    if (mockContextValue.activeStep === 1) {
      expect(mockNavigate).toHaveBeenCalledWith('/request');
    } else {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'back_action_type' });
    }
  });
});
