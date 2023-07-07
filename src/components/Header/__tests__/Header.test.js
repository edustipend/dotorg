import { render } from '@testing-library/react';
import { Header } from '../Header';
import { TestId } from '../constants';

describe('Header component', () => {
  describe('renders the header component', () => {
    it('is visible in the document', () => {
      const { getByTestId } = render(<Header />);
      expect(getByTestId(TestId.DEFAULT_HEADER_TEST_ID)).toBeInTheDocument();
    });
  });
});
