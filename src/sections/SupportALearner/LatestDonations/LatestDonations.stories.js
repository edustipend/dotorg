import { BrowserRouter } from 'react-router-dom';
import LatestDonations from './LatestDonations';

export default {
  title: 'Edustipend/Sections/LatestDonations',
  component: LatestDonations,
  tags: ['autodocs']
};

export const LatestDonationsComponent = () => (
  <BrowserRouter>
    <LatestDonations />
  </BrowserRouter>
);
