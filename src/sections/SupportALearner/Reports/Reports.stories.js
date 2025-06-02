import { BrowserRouter } from 'react-router-dom';
import Reports from './Reports';

export default {
  title: 'Edustipend/Sections/Reports',
  component: Reports,
  tags: ['autodocs']
};

export const ReportsComponent = () => (
  <BrowserRouter>
    <Reports />
  </BrowserRouter>
);
