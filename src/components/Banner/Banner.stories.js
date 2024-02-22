import { Banner } from './Banner';

export default {
  title: 'Edustipend/Components/Banner',
  component: Banner,
  tags: ['Banner']
};

export const AlertBanner = {
  render: (args) => (
    <Banner {...args} type="alert">
      {args.content}
    </Banner>
  ),
  args: {
    content: 'Application is currently closed. If you want to be notified, click on the "Notify me" button',
    type: 'alert'
  }
};

export const ErrorBanner = {
  render: (args) => <Banner {...args}>{args.content}</Banner>,
  args: {
    content: 'Oops! Error has occurred',
    type: 'error'
  }
};

export const InfoBanner = {
  render: (args) => <Banner {...args}>{args.content}</Banner>,
  args: {
    content: 'Application window runs from 1st - 8th of every month',
    type: 'info'
  }
};
