import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import { Quote, TestId, constants } from '../internals/constants';

describe('Home component', () => {
  describe('renders the correct Home component', () => {
    it('shows the Home component in the document', () => {
      render(<Home />);
      expect(screen.getByTestId(TestId.HOME)).toBeInTheDocument();
    });
    it('shows the user name', () => {
      render(<Home />);
      expect(screen.getByTestId(TestId.USER)).toHaveTextContent(constants.username);
    });

    it('shows a quote', () => {
      render(<Home />);
      expect(screen.getByTestId(TestId.QUOTE)).toHaveTextContent(Quote.content);
    });

    it('shows a table for displaying user application status and history', () => {
      render(<Home />);
      expect(screen.getByTestId(TestId.TABLE)).toBeInTheDocument();
    });
  });
});
