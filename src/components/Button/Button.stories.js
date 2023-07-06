import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Edustipend/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export const Primary = {
  args: {
    primary: true,
    label: 'Request stipend'
  }
};

export const Secondary = {
  args: {
    label: 'Request stipend'
  }
};
