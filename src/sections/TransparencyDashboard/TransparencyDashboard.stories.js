import { BrowserRouter } from 'react-router-dom';
import TransaprencyDashboard from './index';

export default {
  title: 'Edustipend/Sections/TransaprencyDashboard',
  component: TransaprencyDashboard,
  tags: ['autodocs']
};

export const TransaprencyDashboardComponent = () => (
  <BrowserRouter>
    <TransaprencyDashboard />
  </BrowserRouter>
);
