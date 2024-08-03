const REFERRAL_AMOUNT = 'byAmount';
const REFERRAL_COUNT = 'byCount';

const referralPageCopy = {
  referHeader: 'Refer a Friend',
  referParagraph: 'Enter your name and email address below to generate a personalized link and share with your friends',
  generateLinkButtonLabel: 'Generate Link',
  referralText: 'Share your unique referral link',
  referralLink: 'https://edustipend.com/refer/ezebillions',
  referralLinkCopy: 'Copy',
  generateLink: 'Generate Link',
  leaderboardTitle: 'Referral Leaderboard',
  itemToRender: 10,
  REFERRAL_AMOUNT,
  REFERRAL_COUNT,
  tableHeads: {
    [REFERRAL_COUNT]: ['Rank', 'Referrer Name', 'No of Referrals'],
    [REFERRAL_AMOUNT]: ['Rank', 'Referrer Name', 'Amount Donated'],
    mobile: ['Rank', 'Referrer Name', '#']
  },
  options: [
    {
      value: REFERRAL_COUNT,
      title: 'Referral Count'
    },
    {
      value: REFERRAL_AMOUNT,
      title: 'Referral Amount'
    }
  ]
};

export const TestId = {
  LEADERBOARD: 'leaderboard-id',
  LEADERBOARD_HEADER: 'leaderboard-header-id',
  LEADERBOARD_TABLE: 'leaderboard-table-id'
};

export default referralPageCopy;
