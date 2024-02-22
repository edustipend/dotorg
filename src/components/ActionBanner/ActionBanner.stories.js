import { ActionBanner as ActionBannerComponent } from './ActionBanner';

export default {
  title: 'Edustipend/Components/ActionBanner',
  component: ActionBannerComponent,
  tags: ['ActionBanner']
};

export const ActionBanner = {
  render: (args) => <ActionBannerComponent {...args} type="sticky" />,
  args: {
    text: 'Application is currently closed. If you want to be notified, click on the "Notify me" button',
    buttonLabel: 'Click me'
  }
};
