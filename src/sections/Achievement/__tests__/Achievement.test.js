import { render, screen } from '@testing-library/react';
import { Achievement } from '../Achievement';
import { ACHIEVEMENT, CELEBRATE, TEXT, TestId } from '../constants';

describe('Achievement', () => {
  describe('The Achievement component should be rendered', () => {
    it('should  be in the document', () => {
      render(<Achievement />);
      expect(screen.getByTestId(TestId.ACHIEVMENT)).toBeInTheDocument();
    });
    it('should have a celebration text', () => {
      render(<Achievement />);
      expect(screen.getByTestId(TestId.ACHIEVMENT)).toHaveTextContent(CELEBRATE);
    });
    it('should have an achievement text', () => {
      render(<Achievement />);
      expect(screen.getByTestId(TestId.ACHIEVMENT)).toHaveTextContent(ACHIEVEMENT);
    });
    it('should have displayed texts', () => {
      render(<Achievement />);
      expect(screen.getByTestId(TestId.ACHIEVMENT)).toHaveTextContent(TEXT);
    });
  });
});
