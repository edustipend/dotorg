import { Header } from './Header';

export default {
  title: 'Edustipend/Components/Header',
  component: Header,
  tags: ['autodocs']
};

export const HeaderLarge = {
  render: (args) => <Header {...args}>{args.text}</Header>,
  args: {
    size: 'large',
    text: 'Request stipend'
  }
};

export const HeaderMedium = {
  render: (args) => <Header {...args}>{args.text}</Header>,
  args: {
    size: 'medium',
    text: 'Request stipend'
  }
};

export const HeaderSmall = {
  render: (args) => <Header {...args}>{args.text}</Header>,
  args: {
    size: 'small',
    text: 'Request stipend'
  }
};

export const Subheader = {
  render: (args) => <Header {...args}>{args.text}</Header>,
  args: {
    size: 'small',
    subheader: true,
    text: 'Request stipend'
  }
};
