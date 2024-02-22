import { render, screen } from '@testing-library/react';
import { Welcome } from '../Welcome';
import { TestId, headText, subText } from '../constants';
import { BrowserRouter } from 'react-router-dom';

describe('Welcome', () => {
  describe('The Welcome component should be rendered', () => {
    it('should  be in the document', () => {
      render(
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WELCOME_CONTAINER)).toBeInTheDocument();
    });
    it('should have a displayed head text', () => {
      render(
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });
    it('should have a displayed sub text', () => {
      render(
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SUB_TEXT)).toHaveTextContent(subText);
    });
    it('should habe a CTA button', () => {
      render(
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WELCOME_CONTAINER)).toContainHTML(TestId.CTA_BTN);
    });
  });
});
