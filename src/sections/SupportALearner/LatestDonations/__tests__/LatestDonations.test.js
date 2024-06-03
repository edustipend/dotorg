import { render, screen } from '@testing-library/react';
import LatestDonations from '../LatestDonations';
import { BrowserRouter } from 'react-router-dom';
import { TestId, headText } from '../constants';
import { donations } from '../donations.mock';

describe('LatestDonations component', () => {
  describe('renders the correct LatestDonations component', () => {
    it('shows the LatestDonations component in the document', () => {
      render(
        <BrowserRouter>
          <LatestDonations />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows LatestDonations header text', () => {
      render(
        <BrowserRouter>
          <LatestDonations />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });

    it('renders list of donations with correct content', () => {
      render(
        <BrowserRouter>
          <LatestDonations />
        </BrowserRouter>
      );

      donations.forEach((donation) => {
        const nameElements = screen.queryAllByText(donation.name);
        expect(nameElements.length).toBeGreaterThan(0);
        nameElements.forEach((nameElement) => {
          expect(nameElement).toBeInTheDocument();
        });
      });
    });
  });
});
