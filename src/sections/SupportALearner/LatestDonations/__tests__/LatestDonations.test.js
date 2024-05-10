import { fireEvent, render, screen } from '@testing-library/react';
import LatestDonations from '../LatestDonations';
import { BrowserRouter } from 'react-router-dom';
import { TestId, donations, headText } from '../constants';

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

    it('renders page numbers correctly', () => {
      render(<LatestDonations />);

      const pageButtons = screen.getAllByRole('button', { name: /[0-9]/ });

      pageButtons.forEach(button => {
        expect(button).toBeInTheDocument();
      });
    });

    it('renders "Prev" and "Next" buttons correctly', () => {
      render(<LatestDonations />);

      expect(screen.getByText(/Prev/)).toBeInTheDocument();
      expect(screen.getByText(/Next/)).toBeInTheDocument();
    });

    it('clicking on "Next" button increments currentPage', () => {
      render(<LatestDonations />);
      const nextButton = screen.getByText(/Next/);

      fireEvent.click(nextButton);
    });

    it('clicking on "Prev" button decrements currentPage', () => {
      render(<LatestDonations />);
      const prevButton = screen.getByText(/Prev/);

      fireEvent.click(prevButton);
    });
  });
});
