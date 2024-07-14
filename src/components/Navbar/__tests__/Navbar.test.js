import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';
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

describe('Navbar component', () => {
  describe('renders the Navbar component', () => {
    it('is visible in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Navbar />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toBeInTheDocument();
    });

    it('shows edustipend, as the Navbar logo', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Navbar />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toContainHTML(TestId.NAVBAR_LOGO);
    });

    it('contains the nav links element for easy navigation', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Navbar />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.NAVBAR_LINKS_ID)).toBeInTheDocument();
    });
  });
});
