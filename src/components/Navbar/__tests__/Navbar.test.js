import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar component', () => {
  describe('renders the Navbar component', () => {
    it('is visible in the document', () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toBeInTheDocument();
    });
    it('shows edustipend, as the Navbar logo', () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toContainHTML(TestId.NAVBAR_LOGO);
    });
    it('contains the nav links element for easy navigation', () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.NAVBAR_LINKS_ID)).toBeInTheDocument();
    });
  });
});
