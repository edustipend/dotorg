import { render, screen } from '@testing-library/react';
import { StartApplication } from '../StartApplication';
import { BrowserRouter } from 'react-router-dom';
import { TestId } from '../constatnts';

describe('StartApplication component', () => {
  describe('renders the correct StartApplication component', () => {
    it('shows the StartApplication component in the document', () => {
      render(
        <BrowserRouter>
          <StartApplication />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DATA_TEST)).toBeInTheDocument();
    });
    it('shows the stipend application text', () => {
      render(
        <BrowserRouter>
          <StartApplication />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DATA_TEST)).toHaveTextContent(TestId.HEAD_TEXT);
    });
  });
});
