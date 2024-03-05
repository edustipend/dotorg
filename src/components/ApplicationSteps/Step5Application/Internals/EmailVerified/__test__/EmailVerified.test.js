import { EmailVerified } from '../EmailVerified';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TestId } from '../constants';
import store from '../../../../../../store';
import { ModalContext } from '../../../../../../context/ModalContext';
const setIsActive = jest.fn();
const value = { setIsActive };

describe('EmailVerified', () => {
  it('The verified component should not be in the dom', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ModalContext.Provider value={value}>
            <EmailVerified />
          </ModalContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    const action = screen.queryByTestId(TestId.VERIFIED_ID);
    expect(action).not.toBeInTheDocument();
  });
  it('The unverified component should not be in the dom', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ModalContext.Provider value={value}>
            <EmailVerified />
          </ModalContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    const action = screen.queryByTestId(TestId.UNVERIFIED_ID);
    expect(action).not.toBeInTheDocument();
  });
});
