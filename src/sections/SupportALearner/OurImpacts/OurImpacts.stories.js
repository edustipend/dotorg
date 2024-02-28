import { BrowserRouter } from 'react-router-dom';
import { OurImpacts } from './OurImpacts';

export default {
  title: 'Edustipend/Sections/OurImpacts',
  component: OurImpacts,
  tags: ['autodocs']
};

export const OurImpactsComponent = () => (
  <BrowserRouter>
    <OurImpacts />
  </BrowserRouter>
);
