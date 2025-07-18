import { BrowserRouter } from 'react-router-dom';
import { Hero } from '../How';

export default {
  title: 'Edustipend/Sections/Communities/Hero',
  component: Hero,
  tags: ['autodocs']
};

export const HeroSection = () => (
  <BrowserRouter>
    <Hero />
  </BrowserRouter>
);
