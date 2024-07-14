import { Select } from './Select';

export default {
  title: 'Edustipend/Components/Select',
  component: Select,
  tags: ['autodocs']
};

const arr = ['Red', 'Green', 'Blue', 'Yellow'];

export const Small = {
  args: {
    size: 'small',
    label: 'Some label',
    options: arr
  }
};

export const Medium = {
  args: {
    size: 'medium',
    label: 'Some label',
    options: arr
  }
};

export const Large = {
  args: {
    size: 'large',
    label: 'Some label',
    options: arr
  }
};
