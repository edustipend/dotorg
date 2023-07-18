import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { DEFAULT_HERO_TEST_ID, HERO_PARAGRAPH, STATIC_HERO_TEXT } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Hero component', () => {
  describe('renders the correct Hero component', () => {
    it('shows the Hero component in the document', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toBeInTheDocument();
    });
    it('shows the Hero main text', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toHaveTextContent(STATIC_HERO_TEXT);
    });

    it('shows a paraagraph', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );
      expect(screen.getByTestId(DEFAULT_HERO_TEST_ID)).toHaveTextContent(HERO_PARAGRAPH);
    });
  });
});
