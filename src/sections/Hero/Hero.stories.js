import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

export default {
  title: 'Edustipend/Sections/Hero',
  component: Hero,
  tags: ['autodocs']
};

export const HeroSection = () => (
  <BrowserRouter>
    <Hero />
  </BrowserRouter>
);
