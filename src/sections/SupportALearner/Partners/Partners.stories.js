import { BrowserRouter } from 'react-router-dom';
import Partners from './Partners';

export default {
  title: 'Edustipend/Sections/Partners',
  component: Partners,
  tags: ['autodocs']
};

export const PartnersComponent = () => (
  <BrowserRouter>
    <Partners />
  </BrowserRouter>
);
