import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { HERO_PARAGRAPH, STATIC_HERO_TEXT, TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from '../../../context/ModalContext';

const { DEFAULT_HERO_TEST_ID } = TestId;

describe('Hero component', () => {
  describe('renders the correct Hero component', () => {
    it('shows the Hero component in the document', () => {
      render(
        <BrowserRouter>
          <ModalContextProvider>
            <Hero />
          </ModalContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toBeInTheDocument();
    });
    it('shows the Hero main text', () => {
      render(
        <BrowserRouter>
          <ModalContextProvider>
            <Hero />
          </ModalContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toHaveTextContent(STATIC_HERO_TEXT);
    });

    it('shows a paraagraph', () => {
      render(
        <BrowserRouter>
          <ModalContextProvider>
            <Hero />
          </ModalContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toHaveTextContent(HERO_PARAGRAPH);
    });
  });
});
