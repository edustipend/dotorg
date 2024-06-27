import { render, screen, waitFor } from '@testing-library/react';
import LatestDonations from '../LatestDonations';
import { BrowserRouter } from 'react-router-dom';
import { TestId, Texts } from '../constants';
import { mockDonations } from '../donations.mock';
import { getData } from '../../../../services/ApiClient';

jest.mock('../../../../services/ApiClient');

describe('LatestDonations component', () => {
  beforeEach(() => {
    getData.mockResolvedValue(mockDonations);
  });

  describe('renders the correct LatestDonations component', () => {
    it('shows the LatestDonations component in the document', async () => {
      render(
        <BrowserRouter>
          <LatestDonations />
        </BrowserRouter>
      );

      expect(await screen.findByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows LatestDonations header text', async () => {
      render(
        <BrowserRouter>
          <LatestDonations />
        </BrowserRouter>
      );

      await waitFor(() => expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(Texts.HEADER));
    });

    it('renders list of donations with correct content', async () => {
      render(
        <BrowserRouter>
          <LatestDonations />
        </BrowserRouter>
      );

      await waitFor(() => {
        mockDonations.data.donations.forEach((donation) => {
          const nameElements = screen.getAllByText(donation.donor.name);
          expect(nameElements.length).toBeGreaterThan(0);
          nameElements.forEach((nameElement) => {
            expect(nameElement).toBeInTheDocument();
          });

          const amountElements = screen.getAllByText(donation.transaction.amount.toString());
          expect(amountElements.length).toBeGreaterThan(0);
          amountElements.forEach((amountElement) => {
            expect(amountElement).toBeInTheDocument();
          });
        });
      });
    });
  });
});
