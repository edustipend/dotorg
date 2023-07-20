import { render, screen } from '@testing-library/react';
import StartApplication from '../StartApplication';
import { TestId } from '../constants';

describe('StartApplication component', () => {
  describe('renders the correct StartApplication component', () => {
    it('shows the StartApplication component in the document', () => {
      render(<StartApplication />);
      expect(screen.getByTestId(TestId.DATA_TEST)).toBeInTheDocument();
    });
    it('shows the StartApplication main text', () => {
      render(<StartApplication />);
      expect(screen.getByTestId(TestId.DATA_TEST)).toHaveTextContent(TestId.HEAD_TEXT);
    });
  });
});
