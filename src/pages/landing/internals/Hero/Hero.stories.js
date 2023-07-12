import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

export default {
  title: 'Edustipend/Hero',
  component: Hero,
  tags: ['autodocs']
};

export const HeroComponent = () => (
  <BrowserRouter>
    <Hero />
  </BrowserRouter>
);
