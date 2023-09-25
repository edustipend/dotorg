import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import { Quote, TestId } from '../internals/constants';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

describe('Home component', () => {
  describe('renders the correct Home component', () => {
    it('shows the Home component in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.HOME)).toBeInTheDocument();
    });
    it('shows the user name', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.USER)).toBeDefined();
    });

    it('shows a quote', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.QUOTE)).toHaveTextContent(Quote.content);
    });

    it('shows a table for displaying user application status and history', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.TABLE)).toBeInTheDocument();
    });
  });
});
