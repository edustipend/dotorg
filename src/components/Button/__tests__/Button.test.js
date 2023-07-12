import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../Button';
import { DEFAULT_BUTTON_LABEL, TestId } from '../constants';

describe('Button component', () => {
  describe('renders the correct button label', () => {
    it('shows the right button text', () => {
      const mockButtonLabel = 'Request stipend';
      render(<Button label={mockButtonLabel} />);
      expect(screen.getByTestId(TestId.DEFAULT_BUTTON_TEST_ID)).toHaveTextContent(mockButtonLabel);
    });

    it('shows a default text when an empty string is passed a label', () => {
      const mockButtonLabel = '';
      render(<Button label={mockButtonLabel} />);
      expect(screen.getByTestId(TestId.DEFAULT_BUTTON_TEST_ID)).toHaveTextContent(DEFAULT_BUTTON_LABEL);
    });
  });

  describe('click handler works as it should', () => {
    it('fires the click handler on button', async () => {
      const mockButtonLabel = 'Request stipend';
      const mockClickHandler = jest.fn();
      render(<Button label={mockButtonLabel} onClick={mockClickHandler} />);
      fireEvent.click(screen.getByTestId(TestId.DEFAULT_BUTTON_TEST_ID));
      expect(mockClickHandler).toHaveBeenCalled();
    });
  });
});
