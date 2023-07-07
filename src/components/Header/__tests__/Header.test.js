import { render } from '@testing-library/react';
import { Header } from '../Header';
import { TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  describe('renders the header component', () => {
    it('is visible in the document', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      expect(getByTestId(TestId.DEFAULT_HEADER_TEST_ID)).toBeInTheDocument();
    });
  });
});
