import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from '../../../context/ModalContext';

describe('Navbar component', () => {
  describe('renders the Navbar component', () => {
    it('is visible in the document', () => {
      render(
        <BrowserRouter>
          <ModalContextProvider>
            <Navbar />
          </ModalContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toBeInTheDocument();
    });
    it('shows edustipend, as the Navbar logo', () => {
      render(
        <BrowserRouter>
          <ModalContextProvider>
            <Navbar />
          </ModalContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toContainHTML(TestId.NAVBAR_LOGO);
    });
    it('contains the nav links element for easy navigation', () => {
      render(
        <BrowserRouter>
          <ModalContextProvider>
            <Navbar />
          </ModalContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.NAVBAR_LINKS_ID)).toBeInTheDocument();
    });
  });
});
