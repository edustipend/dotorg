import Logo from '../../assets/favicon.png';
import { mail, map } from '../../assets';
import { routesConstant } from '../../routesConstant';

const { REQUEST, SUPPORT_A_LEARNER, REPORTS, ABOUT_US, TRANSPARENCY_DASHBOARD, IMPACT_LEADERS, TERMS, PRIVACY } = routesConstant;

export const footerLinks = {
  programmes: {
    title: 'Programmes',
    links: [
      {
        title: 'Support A Learner',
        path: SUPPORT_A_LEARNER
      },
      {
        title: 'Stipend Programme',
        path: REQUEST
      },
      {
        title: 'Impact Leaders Programme',
        path: IMPACT_LEADERS
      }
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      {
        title: 'Impact Report',
        path: REPORTS
      },
      {
        title: 'Transparency Dashboard',
        path: TRANSPARENCY_DASHBOARD
      }
    ]
  },
  company: {
    title: 'Company',
    links: [
      {
        title: 'About Us',
        path: ABOUT_US
      },
      {
        title: 'Team',
        path: ABOUT_US,
        hash: '#team'
      },
      {
        title: 'Our Mission',
        path: ABOUT_US,
        hash: '#OUR MISSION'
      },
      {
        title: 'Our Vision',
        path: ABOUT_US,
        hash: '#OUR VISION'
      },
      {
        title: 'Contact Us',
        path: 'mailto:contact@edustipend.org'
      }
    ]
  },
  contact: {
    title: 'Contact Us',
    links: [
      {
        title: 'Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815',
        path: 'https://www.google.com/maps/search/?api=1&query=Wisconsin+Ave+Suite+700+Chevy+Chase+Maryland+20815',
        icon: map
      },
      {
        title: 'contact@edustipend.com',
        path: 'mailto:contact@edustipend.com',
        icon: mail
      }
    ]
  },
  social: {
    title: 'Follow Us',
    links: [
      {
        path: 'https://www.facebook.com/edustipend',
        icon: 'social-icon fb-icon'
      },
      {
        path: 'https://www.x.com/edustipend',
        icon: 'social-icon tw-icon'
      },
      {
        path: 'https://www.instagram.com/edustipend',
        icon: 'social-icon ig-icon'
      },
      {
        path: 'https://www.linkedin.com/in/edustipend',
        icon: 'social-icon in-icon'
      }
    ]
  },
  footer: {
    logo: {
      path: '/',
      icon: Logo,
      title: 'edustipend'
    },
    copyright: `© ${new Date().getFullYear()} All rights reserved.`,
    terms: [
      {
        title: 'Terms of Service',
        path: TERMS
      },
      {
        title: 'Privacy Policy',
        path: PRIVACY
      }
    ]
  }
};
