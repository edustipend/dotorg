import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TakeOffBurden from '../TakeOffBurden';
import { TestId, TextCopy } from '../constants';
import { ModalContextProvider } from '../../../context/ModalContext';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

describe('TakeOffBurden', () => {
  it('renders the component correctly', () => {
    render(
      <Provider store={store}>
        <ModalContextProvider>
          <BrowserRouter>
            <TakeOffBurden />
          </BrowserRouter>
        </ModalContextProvider>
      </Provider>
    );
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_CONTAINER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(TestId.TAKEOFFBURDEN_TRANSPARENT_CARD_TEST_ID)).toBeInTheDocument();

    expect(screen.getByText(TextCopy.TAKEOFFBURDEN_HEADING)).toBeInTheDocument();
    expect(screen.getByText(TextCopy.TAKEOFFBURDEN_PARAGRAPH)).toBeInTheDocument();

    expect(screen.getByAltText(TextCopy.TAKEOFFBURDEN_ARROW)).toBeInTheDocument();

    // expect(screen.getByText(ButtonLabelCopy.WINDOW_CLOSED)).toBeInTheDocument();
  });
});
