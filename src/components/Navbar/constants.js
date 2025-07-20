import { Drop_Down } from '../../assets';
import { routesConstant } from '../../routesConstant';
const {
  AMBASSADOR_PROGRAM,
  LOGIN,
  SUPPORT_A_LEARNER,
  REPORTS,
  ABOUT_US,
  TRANSPARENCY_DASHBOARD,
  IMPACTS,
  SUPPORT_A_LEARNER_CAMPAIGN,
  IMPACT_LEADERS,
  COMMUNITIES
} = routesConstant;

export const TestId = {
  DEFAULT_NAVBAR_TEST_ID: 'navbar-id',
  NAVBAR_LOGO: '<p>edustipend</p>',
  NAVBAR_LINKS_ID: 'navbar-links'
};

export const NAVBAR_LINKS = [
  {
    label: 'About Us',
    icon: Drop_Down,
    links: [
      {
        label: 'Team',
        path: ABOUT_US,
        hash: '#team'
      },
      {
        label: 'Our Mission',
        path: ABOUT_US,
        hash: '#OUR MISSION'
      },
      {
        label: 'Our Vision',
        path: ABOUT_US,
        hash: '#OUR VISION'
      },
      {
        label: 'Contact Us',
        path: 'mailto:contact@edustipend.org'
      }
    ]
  },
  {
    label: 'Our Impact',
    icon: Drop_Down,
    links: [
      {
        label: 'Overview',
        path: IMPACTS
      },
      {
        label: 'Impact Reports',
        path: REPORTS
      }
    ]
  },
  {
    label: 'Programs',
    icon: Drop_Down,
    links: [
      {
        label: 'Impact Leaders',
        path: IMPACT_LEADERS
      },
      {
        label: 'Communities',
        path: COMMUNITIES
      }
    ]
  },
  {
    label: 'Support A Learner',
    path: SUPPORT_A_LEARNER
  },
  {
    label: 'Login',
    path: LOGIN
  }
];

export const NAVBAR_AMBASSADOR_LINKS = [
  {
    label: 'About the Program',
    path: AMBASSADOR_PROGRAM,
    hash: '#about'
  },
  {
    label: 'Eligibility',
    path: AMBASSADOR_PROGRAM,
    hash: '#eligibility'
  }
];

export const SUPPORT_LEARNER_LINKS = [
  {
    label: 'About Us',
    icon: Drop_Down,
    links: [
      {
        label: 'Team',
        path: ABOUT_US,
        hash: '#team'
      },
      {
        label: 'Our Mission',
        path: ABOUT_US,
        hash: '#OUR MISSION'
      },
      {
        label: 'Our Vision',
        path: ABOUT_US,
        hash: '#OUR VISION'
      },
      {
        label: 'Contact Us',
        path: 'mailto:contact@edustipend.org'
      }
    ]
  },
  {
    label: 'Our Impact',
    icon: Drop_Down,
    links: [
      {
        label: 'Overview',
        path: IMPACTS
      },
      {
        label: 'Impact Reports',
        path: REPORTS
      }
    ]
  },
  {
    label: 'Donations',
    icon: Drop_Down,
    links: [
      {
        label: 'Recent Donations',
        path: SUPPORT_A_LEARNER,
        hash: '#recent-donations'
      },
      {
        label: 'Donations Dashboard',
        path: TRANSPARENCY_DASHBOARD
      }
    ]
  },
  {
    label: 'Campaigns',
    icon: Drop_Down,
    links: [
      {
        label: 'Support A Learner',
        path: SUPPORT_A_LEARNER_CAMPAIGN
      }
    ]
  },
  {
    label: 'How much can I donate?',
    path: SUPPORT_A_LEARNER,
    hash: '#how-much-can-i-donate'
  }
];

export const BUTTON_LABEL = 'Request stipend';
export const BUTTON_TYPE = 'secondary';
export const applyLabel = 'Apply Now';
export const edustipendPurple = '#5800ff';
