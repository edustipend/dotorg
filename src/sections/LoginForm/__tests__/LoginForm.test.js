import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import { HEAD_TEXT, SUB_TEXT, TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

const { LOGIN_FORM_TEST_ID, BTN_TEST_ID } = TestId;

describe('LoginForm component', () => {
  describe('renders the correct LoginForm component', () => {
    it('shows the LoginForm component in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(LOGIN_FORM_TEST_ID)).toBeInTheDocument();
    });
    it('shows the LoginForm main text', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(LOGIN_FORM_TEST_ID)).toHaveTextContent(HEAD_TEXT);
    });

    it('shows a paraagraph', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(LOGIN_FORM_TEST_ID)).toHaveTextContent(SUB_TEXT);
    });
    it('have a login button', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(LOGIN_FORM_TEST_ID)).toContainHTML(BTN_TEST_ID);
    });
  });
});
