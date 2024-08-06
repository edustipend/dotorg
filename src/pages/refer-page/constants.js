const REFERRAL_AMOUNT = 'byAmount';
const REFERRAL_COUNT = 'byCount';
const headings = ['Rank', 'Referrer Name'];

const referralPageCopy = {
  referHeader: 'Refer a Friend',
  referParagraph: 'Enter your name and email address below to generate a personalized link and share with your friends',
  generateLinkButtonLabel: 'Generate Link',
  referralText: 'Share your unique referral link',
  referralLinkCopy: 'Copy',
  generateLink: 'Generate Link',
  leaderboardTitle: 'Referral Leaderboard',
  itemToRender: 10,
  REFERRAL_AMOUNT,
  REFERRAL_COUNT,
  tableHeads: {
    [REFERRAL_COUNT]: { desktop: [...headings, 'No of Referrals'], mobile: [...headings, '#'] },
    [REFERRAL_AMOUNT]: { desktop: [...headings, 'Amount Donated'], mobile: [...headings, 'Amount Donated'] }
  },
  tabs: [
    {
      value: REFERRAL_AMOUNT,
      title: 'By Referral Amount'
    },
    {
      value: REFERRAL_COUNT,
      title: 'By Referral Count'
    }
  ]
};

export const TestId = {
  EMAIL_INPUT: 'referral-email-input',
  NAME_INPUT: 'referral-name-input',
  LEADERBOARD: 'leaderboard-id',
  LEADERBOARD_HEADER: 'leaderboard-header-id',
  LEADERBOARD_TABLE: 'leaderboard-table-id'
};

export default referralPageCopy;
