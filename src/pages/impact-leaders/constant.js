import { apply, applyMobile, pitch, fellow } from '../../assets/impactL';

export const constant = {
  title: 'Your Path to Impact',
  subtitle: 'From application to action, here’s your journey to becoming an Impact Leader',
  ButtonLabel:"Join Now",
  FormLink:"https://forms.gle/fSB58ZQKf2RVGLLz9",
  ReadyText:"Apply now, unlock funding, and join a network of passionate changemakers shaping the future!",
  BatchTag:"How it works",
  apply: {
    image: apply,
    imageMobile: applyMobile,
    title: 'Apply Online',
    text: `Kickstart your journey by filling out the online application. Tell us about your passion, experience,
         and the impact you want to create. This is your chance to stand out and take the first step toward making a real difference.`,
    applicants: [
      'Nigerian citizens residing in any of the 36 states or the FCT and aged 20–35 years',
      'Not currently enrolled in an undergraduate program (Must have graduated)',
      'At least 2 years of experience in social impact work, especially in education or skills development.',
      'Demonstrated leadership ability and commitment to driving change.',
      'Strong community mobilisation skills.'
    ]
  },

  pitch: {
    image: pitch,
    title: 'Pitch Your Idea',
    text: `Shortlisted candidates will get the opportunity to present their projects to a panel of experts. This is your moment to share your story, 
    demonstrate your leadership, and prove how your initiative can drive meaningful change in communities.`,
    evaluation: [
      {
        title: 'Experience Level',
        text: 'The applicant’s track record in leading social impact initiatives.'
      },
      {
        title: 'Project Feasibility',
        text: 'Can the initiative be successfully executed within three months?'
      },
      {
        title: 'Experience Level',
        text: 'The applicant’s track record in leading social impact initiatives.'
      },
      {
        title: 'Impact Scale',
        text: 'The applicant’s track record in leading social impact initiatives.'
      },
      {
        title: 'Monitoring & Evaluation',
        text: 'A solid strategy for tracking success and measuring outcomes.'
      }
    ]
  },

  fellow: {
    image: fellow,
    title: 'Become a Fellow',
    text: `Once selected, you’ll receive funding, mentorship, and resources to bring your project to life. 
    Join a network of like-minded changemakers, collaborate with stakeholders, and make a lasting impact where it matters`
  },

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find quick answers to common questions about our Impact Leaders Program',

    QA: [
      {
        question: 'Who can apply for the Impact Leaders Program?',
        content: 0
      },
      {
        question: 'What kind of projects are eligible?',
        content: 1
      },
      {
        question: 'What support do selected Fellows receive?',
        content: 2
      },
      {
        question: 'How are Fellows selected?',
        content: 3
      },
      {
        question: 'What is the timeline for the program?',
        content: 4
      },
      {
        question: 'Can I apply if I have a full-time job?',
        content: 5
      },
      {
        question: 'Will I receive ongoing support after the program?',
        content: 6
      }
    ],
    ContentA: `The program is open to Nigerian citizens aged 20-35 who have at least 2 years of experience in social impact work, especially in education or
      skills development. Applicants must not be currently enrolled in an undergraduate program.`,
    ContentB: `They are looking for community-driven initiatives focused on education, skills development, or youth empowerment. Projects should be impactful,
      feasible within three months, and sustainable beyond the program timeline.`,
    ContentC: {
      title: 'Fellows will receive:',
      list: [
        'N500,000 grant to launch and sustain their project.',
        'Laptop award for successful program completion.',
        'Mentorship & networking opportunities with industry leaders.',
        'Visibility & recognition for their work.'
      ]
    },
    ContentD: {
      title: 'The selection process includes:',
      list: [
        'Application Review - We assess your experience and project proposal.',
        'Project Pitch - Shortlisted candidates will present their initiative to a panel.',
        'Final Selection - Five outstanding candidates will be chosen based on impact potential, leadership, and feasibility.'
      ]
    },
    ContentE: {
      list: ['Application Deadline: May 14, 2025 (11:59 PM WAT)', 'Program Duration: June - August 2025']
    },
    ContentF: `Yes! As long as you can commit to executing your project within the program timeline, you are welcome to apply`,
    ContentG: `Yes! Fellows become part of the Edustipend Impact Network, where they can access ongoing mentorship, collaboration opportunities, and additional resources.`
  }
};
