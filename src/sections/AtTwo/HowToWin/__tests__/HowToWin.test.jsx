import { render, screen } from '@testing-library/react';
import { HowToWin } from '../HowToWin';
import { description, steps, TestId, title } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('HowToWin', () => {
  describe('The HowToWin component should be rendered', () => {
    it('should  be in the document', () => {
      render(
        <BrowserRouter>
          <HowToWin />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HOW_TO_WIN)).toBeInTheDocument();
    });
    it('should have a descriptive head text', () => {
      render(
        <BrowserRouter>
          <HowToWin />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(title);
    });
    it('should have a descriptive sub text', () => {
      render(
        <BrowserRouter>
          <HowToWin />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SUB_TEXT)).toHaveTextContent(description);
    });
    it('should have steps in the dcoument', () => {
      render(
        <BrowserRouter>
          <HowToWin />
        </BrowserRouter>
      );
      steps.forEach((step) => expect(screen.getByText(step.title)).toBeInTheDocument());
    });
  });
});
