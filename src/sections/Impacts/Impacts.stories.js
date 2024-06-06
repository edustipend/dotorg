import { BrowserRouter } from 'react-router-dom';
import Impacts from './index';

export default {
  title: 'Edustipend/Sections/Impacts',
  component: Impacts,
  tags: ['autodocs']
};

export const ImpactsComponent = () => (
  <BrowserRouter>
    <Impacts />
  </BrowserRouter>
);
