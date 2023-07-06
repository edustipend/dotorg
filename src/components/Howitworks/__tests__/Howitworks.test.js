import { render, fireEvent } from '@testing-library/react';
import HowItWorks from '../Howitworks';
import { TestId } from '../constants';

describe('how it works component', () => {
  describe('renders the correct text', () => {
    it('shows the correct header text', () => {
      const headerText = 'How it Works';
      const { getByTestId } = render(<HowItWorks label={headerText} />);
    });
  });
});
