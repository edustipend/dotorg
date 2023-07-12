import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Edustipend/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    effect: { control: 'select', options: ['primary', 'secondary'] }
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
