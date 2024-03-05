import { HeroSection } from './HeroSection';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Edustipend/Sections/SupportALearner/HeroSection',
  component: HeroSection,
  tags: ['autodocs']
};

export const HeroSectionComponent = () => (
  <BrowserRouter>
    <HeroSection />
  </BrowserRouter>
);
