import { render } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar component', () => {
  describe('renders the Navbar component', () => {
    it('is visible in the document', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      expect(getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toBeInTheDocument();
    });
    it('shows edustipend, as the Navbar logo', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
      expect(getByTestId(TestId.DEFAULT_NAVBAR_TEST_ID)).toContainHTML(TestId.NAVBAR_LOGO);
    });
  });
});
