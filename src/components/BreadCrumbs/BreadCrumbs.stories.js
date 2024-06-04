import { BrowserRouter } from 'react-router-dom';
import { paths } from '../../sections/TransparencyDashboard/constants';
import { BreadCrumbs } from './BreadCrumbs';

export default {
  title: 'Edustipend/Components/BreadCrumbs',
  tags: ['autodocs']
};

export const BreadCrumbSection = () => (
  <BrowserRouter>
    <BreadCrumbs paths={paths} />
  </BrowserRouter>
);
