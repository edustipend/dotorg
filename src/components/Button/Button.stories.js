import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Edustipend/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    effect: { control: 'select', options: ['primary', 'secondary'] },
    type: { control: 'select', options: ['plain', 'primary', 'secondary'] }
  }
};

export const Primary = {
  args: {
    type: 'primary',
    label: 'Request stipend'
  }
};

export const Plain = {
  args: {
    type: 'plain',
    label: 'Request stipend'
  }
};

export const Secondary = {
  args: {
    type: 'secondary',
    label: 'Request stipend'
  }
};
