import PropTypes from 'prop-types';
import { Application_Icon, Engagement_Icon, Referrals_Icon } from '../../../assets';

export const title = 'How to Win';
export const description = 'There are 3 different paths to win one of the 22 laptops. You can follow one, two or all of the paths';

export const steps = [
  {
    icon: Referrals_Icon,
    title: 'Referrals',
    description: '10 laptops are available to be won through this path.',
    steps: [
      'Create a Personalized Link',
      'Refer a Friend or Individual',
      'Encourage your referrals to make a donation to the Support A Learner campaign using your personalized link.',
      'The top 5 by amount donated and top 5 by number of referrals automatically win the laptops.'
    ],
    btn: {
      label: 'Create Personalized Link',
      path: '/support-a-learner/refer-a-friend',
      variant: 'secondary'
    }
  },
  {
    icon: Engagement_Icon,
    title: 'Social Media Engagement',
    description: '6 laptops are available to be won through this path.',
    steps: [
      'Generate a Personalized Flier',
      'Make a social media post using the hashtag #EdustipendAt2 and #SupportALearner',
      'The top 6 posts with the highest social media engagement across all four social media channels (Facebook, Instagram, LinkedIn, X) win the laptops'
    ],
    btn: {
      label: 'Generate Personalized Flyer',
      path: '/support-a-learner/refer-a-friend',
      variant: 'secondary'
    }
  },
  {
    icon: Application_Icon,
    title: 'Direct Application',
    description: '6 laptops are available to be won through this path.',
    steps: [
      'Complete and submit the monthly stipend application for the laptop category',
      'Your application will be reviewed by our review team.',
      'TThe top 6 applicants with the strongest applications  win the laptops'
    ],
    btn: {
      label: 'Apply Now',
      path: '/application',
      variant: 'secondary'
    }
  }
];

export const stepPropShape = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  btn: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
  }).isRequired
};

export const TestId = {
  HOW_TO_WIN : 'how_to_win',
  HEAD_TEXT : 'HEAD_TEXT',
  SUB_TEXT : 'sub_text',
  STEPS:'steps'
}