import { render, screen } from '@testing-library/react';
import { OurImpacts } from '../OurImpacts';
import { BrowserRouter } from 'react-router-dom';
import { TestId, description, headText, subText } from '../constants';

describe('OurImpacts component', () => {
  describe('renders the correct OurImpacts component', () => {
    it('shows the OurImpacts component in the document', () => {
      render(
        <BrowserRouter>
          <OurImpacts />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows Our Impacts header text', () => {
      render(
        <BrowserRouter>
          <OurImpacts />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });

    it('shows an image in the document', () => {
      render(
        <BrowserRouter>
          <OurImpacts />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.IMAGE)).toBeInTheDocument();
    });

    it('shows the description text', () => {
      render(
        <BrowserRouter>
          <OurImpacts />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DESCRIPTION)).toHaveTextContent(description);
    });
    
    it('shows the description sub text', () => {
      render(
        <BrowserRouter>
          <OurImpacts />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SUB_TEXT)).toHaveTextContent(subText);
    });
  });
});
