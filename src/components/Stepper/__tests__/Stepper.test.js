import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Stepper from '../Stepper';
import { StepperCtx } from '../../../context/StepperContext';
import { TestId, Text } from '../constants';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockContextValue = {
  activeStep: 1
};

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    userId: 'randomUser'
  }
});

describe('Stepper Component', () => {
  it('renders without errors', () => {
    render(
      <Provider store={store}>
        <StepperCtx.Provider value={mockContextValue}>
          <Stepper />
        </StepperCtx.Provider>
      </Provider>
    );

    expect(screen.getByTestId(TestId.BACK_ICON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(Text.BACK_ICON_TEXT)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TITLE_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.PARAGRAPH_TEST_ID)).toBeInTheDocument();
  });

  it('handles click correctly', () => {
    const mockDispatch = jest.fn();
    render(
      <Provider store={store}>
        <Stepper onClick={mockDispatch} activeStep={mockContextValue.activeStep} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId(TestId.BACK_ICON_TEST_ID));
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
