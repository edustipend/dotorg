import { BrowserRouter } from 'react-router-dom';
import { HowToWin } from './HowToWin';

export default {
  title: 'Edustipend/Sections/HowToWin',
  component: HowToWin,
  tags: ['autodocs']
};

export const HowToWinSection = () => (
  <BrowserRouter>
    <HowToWin />
  </BrowserRouter>
);
