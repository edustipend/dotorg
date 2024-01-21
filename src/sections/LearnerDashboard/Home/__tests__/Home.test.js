import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import { Quote, TestId } from '../internals/constants';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User',
    isVerified: true
  }
});

describe('Home component', () => {
  describe('renders the correct Home component', () => {
    it('shows the Home component in the document', () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      expect(screen.getByTestId(TestId.HOME)).toBeInTheDocument();
    });
    it('shows the user name', () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      expect(screen.getByTestId(TestId.USER)).toBeDefined();
    });

    it('shows a quote when the user is verified', () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      expect(screen.getByTestId(TestId.QUOTE)).toHaveTextContent(Quote.content);
    });

    it('shows the verify banner when the user is not verified', () => {
      render(
        <Provider
          store={mockStore({
            user: {
              name: 'Test User',
              isVerified: false
            }
          })}
        >
          <Home />
        </Provider>
      );
      expect(screen.getByTestId(TestId.VERIFY_BANNER)).not.toBeNull();
    });

    it('shows a table for displaying user application status and history', () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      expect(screen.getByTestId(TestId.TABLE)).toBeInTheDocument();
    });
  });
});
