import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from '../../../../context/ModalContext';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Hero from '../Hero';
import { content, TestId } from '../constants';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

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

      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows Hero header text', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(content.headText);
    });

    it('shows Hero sub text', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getByTestId(TestId.SUB_TEXT)).toHaveTextContent(content.subText);
    });

    it('renders the CTA Button', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getByTestId(TestId.BTN)).toBeInTheDocument();
    });

    it('renders the Community image', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <Hero />
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getByTestId(TestId.IMG)).toBeInTheDocument();
    });
  });
});
