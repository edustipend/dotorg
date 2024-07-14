import { BrowserRouter } from 'react-router-dom';
import { HowWeSelect } from './HowWeSelect';

export default {
  title: 'Edustipend/Sections/HowWeSelect',
  component: HowWeSelect,
  tags: ['autodocs']
};

export const HowWeSelectComponent = () => (
  <BrowserRouter>
    <HowWeSelect />
  </BrowserRouter>
);
