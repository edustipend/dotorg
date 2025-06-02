import { Accordion as AccordionComponent } from './Accordion';

export default {
  title: 'Edustipend/Components/Accordion',
  component: AccordionComponent,
  tags: ['Accordion'],
};

export const Accordion = {
  render: (args) => <AccordionComponent {...args} />,
  args: {
    question: 'What is the application deadline?',
    answer: 'The application deadline is December 1st. Make sure to submit all your documents before this date.',
  },
};
