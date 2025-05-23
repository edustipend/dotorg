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
  }
};
