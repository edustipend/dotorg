import { Goal_Icon, User_Icon } from '../../assets';

export const targets = [
  {
    icon: Goal_Icon,
    value: '₦10,000,000',
    category: 'goal'
  },
  {
    icon: User_Icon,
    value: '114',
    category: 'contributors'
  }
];

export const data = {
  goal: 10000000,
  contributors: 114,
  raised: 956000,
  completed: 9
};

export const donations = {
  title: 'Total Donations',
  weekly: 956789,
  monthly: 1000000,
  daily: 95300
};

export const btn = {
  label: 'Support a learner',
  path: '/support-a-learner',
  variant: 'secondary'
};

export const paths = [
  {
    title: 'Home',
    path: '/support-a-learner'
  },
  {
    title: 'Donations',
    path: '/transparency-dashboard'
  }
];

export const TestId = {
  DONATIONS_FILTER_ID: 'donations-filter-id',
  SELECT_OPTION: 'select-option',
  AMOUNT_RAISED: 'amount-raised'
};
