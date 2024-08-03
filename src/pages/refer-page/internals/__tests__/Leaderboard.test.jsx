import { render, screen, waitFor } from '@testing-library/react';
import { Leaderboard } from '../Leaderboard';
import referralPageCopy, { TestId } from '../../constants';
import { LeaderboardTable } from '../LeaderboardTable';
import { getData, REFERRAL_BY_AMOUNT, REFERRAL_BY_COUNT } from '../../../../services/ApiClient';
const { itemToRender, REFERRAL_COUNT, REFERRAL_AMOUNT } = referralPageCopy;

jest.mock('../../../../services/ApiClient');

describe('Leaderboard Component', () => {
  describe('renders the correct leaderboard component', () => {
    it('shows the leaderboard component in the document', () => {
      render(<Leaderboard />);
      expect(screen.getByTestId(TestId.LEADERBOARD)).toBeInTheDocument();
    });
    it('shows the leaderboard title in the document', () => {
      render(<Leaderboard />);
      expect(screen.getByTestId(TestId.LEADERBOARD_HEADER)).toBeInTheDocument();
    });
    it('shows the leaderboard table component in the document', () => {
      render(<Leaderboard />);
      expect(screen.getByTestId(TestId.LEADERBOARD_TABLE)).toBeInTheDocument();
    });
  });
});

describe('Leaderboard Table', () => {
  beforeEach(() => {
    getData.mockClear();
  });

  it('renders without crashing and fetches data', async () => {
    const mockDataByAmount = { data: Array(20).fill({ count: 5, referrer: 'Ade Kola' }) };
    const mockDataByCount = { data: Array(15).fill({ totalAmount: 10, referrer: 'Ade Kola' }) };

    getData.mockImplementation((route) => {
      if (route === REFERRAL_BY_AMOUNT) {
        return Promise.resolve(mockDataByAmount);
      } else if (route === REFERRAL_BY_COUNT) {
        return Promise.resolve(mockDataByCount);
      }
    });

    render(<LeaderboardTable referralType={REFERRAL_COUNT} />);

    expect(screen.getByTestId(TestId.LEADERBOARD_TABLE)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(itemToRender);
    });
  });

  it('renders correct table headings on mobile', () => {
    global.innerWidth = 500;

    render(<LeaderboardTable referralType={REFERRAL_COUNT} />);

    referralPageCopy.tableHeads.mobile.forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });

    global.innerWidth = 1024;
  });

  it('renders correct table headings based on referral type', () => {
    render(<LeaderboardTable referralType={REFERRAL_AMOUNT} />);

    referralPageCopy.tableHeads[REFERRAL_AMOUNT].forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });

    referralPageCopy.tableHeads[REFERRAL_AMOUNT].forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });
});
