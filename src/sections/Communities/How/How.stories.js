import { BrowserRouter } from 'react-router-dom';
import { How } from '.';

export default {
  title: 'Edustipend/Sections/Communities/How',
  component: How,
  tags: ['autodocs']
};

export const HowSection = () => (
  <BrowserRouter>
    <How />
  </BrowserRouter>
);
