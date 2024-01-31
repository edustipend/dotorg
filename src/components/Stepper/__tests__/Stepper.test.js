import React from 'react';
<<<<<<< HEAD
import { render, fireEvent, screen } from '@testing-library/react';
=======
import { render, screen, fireEvent } from '@testing-library/react';
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
import Stepper from '../Stepper';
import { StepperCtx } from '../../../context/StepperContext';
import { TestId, Text } from '../constants';
import { Provider } from 'react-redux';
<<<<<<< HEAD
=======

>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
import configureMockStore from 'redux-mock-store';

const mockContextValue = {
  activeStep: 1
};

<<<<<<< HEAD
=======
const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    userId: 'randomUser'
  }
});

>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
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
<<<<<<< HEAD

    render(
      <Provider store={store}>
        <StepperCtx.Provider value={mockContextValue}>
          <Stepper />
        </StepperCtx.Provider>
      </Provider>
    )

=======
    render(
      <Provider store={store}>
        <StepperCtx.Provider value={mockContextValue}>
          <Stepper />
        </StepperCtx.Provider>
      </Provider>
    );

>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
    expect(screen.getByTestId(TestId.BACK_ICON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(Text.BACK_ICON_TEXT)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TITLE_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.PARAGRAPH_TEST_ID)).toBeInTheDocument();
  });

  it('handles click correctly', () => {
    const mockDispatch = jest.fn();
<<<<<<< HEAD
=======

>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
    render(
      <Provider store={store}>
        <Stepper onClick={mockDispatch} activeStep={mockContextValue.activeStep} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId(TestId.BACK_ICON_TEST_ID));
<<<<<<< HEAD

    fireEvent.click(screen.getByTestId(TestId.BACK_ICON_TEST_ID));
=======
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
