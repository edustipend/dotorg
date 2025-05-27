import { apply, applyMobile, pitch, fellow } from '../../assets/impactL';

export const constant = {
  title: 'Your Path to Impact',
  subtitle: 'From application to action, here’s your journey to becoming an Impact Leader',

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
        answer:
          'The Impact Leaders Program is open to emerging leaders, innovators, and entrepreneurs from diverse backgrounds who are passionate about driving positive social and environmental change in their communities. Applicants should typically have a proven track record of initiative and a clear vision for their proposed impact project.'
      },
      {
        question: 'What kind of projects are eligible?',
        answer:
          'Eligible projects typically focus on addressing pressing social or environmental challenges, such as sustainable development, education, public health, gender equality, or community empowerment. Projects should be innovative, scalable, and demonstrate potential for measurable impact. Both new initiatives and existing projects seeking to expand are considered.'
      },
      {
        question: 'What support do selected Fellows receive?',
        answer:
          'Selected Fellows receive comprehensive support, which may include mentorship from industry experts, capacity-building workshops, access to a network of like-minded leaders, and potential seed funding or grants to develop and scale their projects. The program often provides resources for project management, fundraising, and impact measurement.'
      },
      {
        question: 'How are Fellows selected?',
        answer:
          "Fellows are selected through a rigorous multi-stage process that typically includes an online application, submission of a project proposal, interviews, and potentially a pitch presentation. Selection criteria focus on the applicant's leadership potential, the innovation and feasibility of their project, and its alignment with the program's mission and values."
      },
      {
        question: 'What is the timeline for the program?',
        answer:
          "The program typically runs for a specified duration, often between 6 to 12 months, with key milestones for workshops, mentorship sessions, and project implementation. The application period usually opens annually, with selection and onboarding occurring in the subsequent months. Specific dates are announced on the program's official website."
      },
      {
        question: 'Can I apply if I have a full-time job?',
        answer:
          'Many impact leadership programs are designed to accommodate individuals who are also working full-time. The program structure often includes flexible schedules, online components, and weekend sessions. However, applicants should be prepared to dedicate a significant amount of time and effort to program activities and their project development.'
      },
      {
        question: 'Will I receive ongoing support after the program?',
        answer:
          "Yes, many programs offer continued support to their alumni network. This can include access to an exclusive community, opportunities for advanced training, invitations to networking events, and ongoing mentorship. The goal is to foster long-term impact and sustained growth for Fellows beyond the program's official duration."
      }
    ]
  }
};
