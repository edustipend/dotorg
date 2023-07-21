import { fireEvent, render, screen } from '@testing-library/react';
import { StartApplication } from '../StartApplication';
import { TestId } from '../constatnts';

describe('StartApplication component', () => {
  describe('renders the correct StartApplication component', () => {
    it('shows the StartApplication component in the document', () => {
      render(<StartApplication />);
      expect(screen.getByTestId(TestId.DATA_TEST)).toBeInTheDocument();
    });
    it('shows the stipend application text', () => {
      render(<StartApplication />);
      expect(screen.getByTestId(TestId.DATA_TEST)).toHaveTextContent(TestId.HEAD_TEXT);
    });
    it('shows an input field', () => {
      render(<StartApplication />);
      expect(screen.getByTestId(TestId.INPUT_ID)).toBeInTheDocument();
    });
    it('shows a disabled button in the document', () => {
      render(<StartApplication />);
      expect(screen.getByTestId(TestId.BTN_ID)).toBeDisabled();
    });
    it('shows a disabled button, if input field has an icorrect email type', () => {
      render(<StartApplication />);
      fireEvent.change(screen.getByTestId(TestId.INPUT_ID), { target: { value: TestId.MOCK_INVALID_EMAIL } });
      expect(screen.getByTestId(TestId.BTN_ID)).toBeDisabled();
    });
  });
});
