import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import { Quote, TestId } from '../internals/constants';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ModalContextProvider } from '../../../../context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User',
    isVerified: true
  },
  application: {
    stipendCategory: 'Laptop/Learning Device'
  }
});

describe('Home component', () => {
  describe('renders the correct Home component', () => {
    it('shows the Home component in the document', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalContextProvider>
              <Home />
            </ModalContextProvider>
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HOME)).toBeInTheDocument();
    });
    it('shows the user name', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalContextProvider>
              <Home />
            </ModalContextProvider>
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.USER)).toBeDefined();
    });

    it('shows a quote when the user is verified', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalContextProvider>
              <Home />
            </ModalContextProvider>
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.QUOTE)).toHaveTextContent(Quote.content);
    });

    it('shows the verify banner when the user is not verified', () => {
      render(
        <BrowserRouter>
          <Provider
            store={mockStore({
              user: {
                name: 'Test User',
                isVerified: false
<<<<<<< HEAD
=======
              },
              application: {
                stipendCategory: 'Laptop/Learning Device'
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
              }
            })}>
            <ModalContextProvider>
              <Home />
            </ModalContextProvider>
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.VERIFY_BANNER)).not.toBeNull();
    });

    it('shows a table for displaying user application status and history', () => {
      render(
<<<<<<< HEAD
      <BrowserRouter>
        <Provider store={store}>
          <ModalContextProvider>
            <Home />
          </ModalContextProvider>
        </Provider>
      </BrowserRouter>
=======
        <BrowserRouter>
          <Provider store={store}>
            <ModalContextProvider>
              <Home />
            </ModalContextProvider>
          </Provider>
        </BrowserRouter>
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
      );
      expect(screen.getByTestId(TestId.TABLE)).toBeInTheDocument();
    });
  });
});
