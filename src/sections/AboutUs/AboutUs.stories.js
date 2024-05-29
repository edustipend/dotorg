import AboutUs from './AboutUs';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Edustipend/Sections/SupportALearner/AboutUs',
  component: AboutUs,
  tags: ['autodocs']
};

export const AboutUsComponent = () => (
  <BrowserRouter>
    <AboutUs />
  </BrowserRouter>
);
