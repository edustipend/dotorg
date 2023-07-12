import { Header } from './Header';

export default {
  title: 'Edustipend/Components/Header',
  component: Header,
  tags: ['autodocs']
};

export const HeaderLarge = {
  args: {
    size: 'large',
    text: 'Request stipend'
  }
};

export const HeaderMedium = {
  args: {
    size: 'medium',
    text: 'Request stipend'
  }
};

export const HeaderSmall = {
  args: {
    size: 'small',
    text: 'Request stipend'
  }
};

export const Subheader = {
  args: {
    size: 'small',
    subheader: true,
    text: 'Request stipend'
  }
};
