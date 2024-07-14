import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { HERO_PARAGRAPH, STATIC_HERO_TEXT, TestId } from '../constants';
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

const { DEFAULT_HERO_TEST_ID } = TestId;

describe('Hero component', () => {
  describe('renders the correct Hero component', () => {
    it('shows the Hero component in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toBeInTheDocument();
    });
    it('shows the Hero main text', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toHaveTextContent(STATIC_HERO_TEXT);
    });

    it('shows a paraagraph', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toHaveTextContent(HERO_PARAGRAPH);
    });
  });
});
