import PropTypes from 'prop-types';
import { bulb, globe, handShake } from '../../../assets';

export const content = {
  headText: 'How Our Community Support Works',
  headSize: 'medium',
  subText: "We're shifting our focus to a more collaborative and impactful approach. Here’s how Edustipend empowers entire communities.",
  how: [
    {
      icon: bulb,
      title: '1. Identify Needs',
      description:
        'We partner with local community leaders and educators to identify specific educational needs, be it data access, learning devices, or vocational training.'
    },
    {
      icon: handShake,
      title: '2. Mobilize Support',
      description: 'Through our network of donors and Impact Leaders, we rally resources and expertise tailored to the identified community needs.'
    },
    {
      icon: globe,
      title: '3. Implement & Monitor',
      description:
        'Resources are deployed directly to the community through organized initiatives, with continuous monitoring to ensure sustainable impact.'
    }
  ],
  props: {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }
};

export const TestId = {
  WRAPPER: 'how-wrapper',
  HEAD_TEXT: 'how-header',
  SUB_TEXT: 'how-sub-text',
  HOW: 'how-container',
  HOW_STEP: 'how-step'
};
