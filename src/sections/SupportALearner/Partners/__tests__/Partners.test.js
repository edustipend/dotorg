import { render, screen } from '@testing-library/react';
import Partners from '../Partners';
import { BrowserRouter } from 'react-router-dom';
import { TestId, headText, description, STATS } from '../contants';

describe('Partners component', () => {
  describe('renders the correct Partners component', () => {
    it('shows the Partners component in the document', () => {
      render(
        <BrowserRouter>
          <Partners />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows Partners header text', () => {
      render(
        <BrowserRouter>
          <Partners />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });

    it('shows the description text', () => {
      render(
        <BrowserRouter>
          <Partners />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DESCRIPTION)).toHaveTextContent(description);
    });

    it('shows the description text in span', () => {
      render(
        <BrowserRouter>
          <Partners />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.STATS)).toHaveTextContent(STATS);
    });

    it('renders correct number of partner images', () => {
      render(
        <BrowserRouter>
          <Partners />
        </BrowserRouter>
      );
      const partnerImages = screen.getAllByAltText((content, element) => {
        return element.tagName.toLowerCase() === 'img' && content.startsWith('partner');
      });
      expect(partnerImages).toHaveLength(6);
    });
  });
});
