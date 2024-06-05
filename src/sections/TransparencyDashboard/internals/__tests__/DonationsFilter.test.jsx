import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DonationsFilter } from '../DonationsFilter';
import { TestId } from '../../constants';
import { formatMoney } from '../../../../utils/numberFormatter/formatMoney';

describe('DonationsFilter', () => {
  describe('The DonationsFilter component should be rendered in the document', () => {
    it('should be in the document', () => {
      render(
        <BrowserRouter>
          <DonationsFilter amountRaised={0} handleOptionChange={() => {}} />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DONATIONS_FILTER_ID)).toBeInTheDocument();
    });

    it('should display the correct amount raised', () => {
      const amountRaised = 100000;
      render(
        <BrowserRouter>
          <DonationsFilter amountRaised={amountRaised} handleOptionChange={() => {}} />
        </BrowserRouter>
      );
      expect(screen.getByText(formatMoney(amountRaised))).toBeInTheDocument();
      expect(screen.getByTestId(TestId.AMOUNT_RAISED).textContent).toBe('₦100,000');
    });

    it('should call handleOptionChange when the select option is changed', () => {
      const handleOptionChange = jest.fn();
      render(
        <BrowserRouter>
          <DonationsFilter amountRaised={0} handleOptionChange={handleOptionChange} />
        </BrowserRouter>
      );
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'weekly' } });
      expect(handleOptionChange).toHaveBeenCalled();
      expect(screen.getByTestId(TestId.SELECT_OPTION).value).toBe('weekly');
    });
  });
});
