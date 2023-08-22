import { BrowserRouter } from 'react-router-dom';
import { Welcome } from './Welcome';

export default {
  title: 'Edustipend/Sections/Welcome',
  component: Welcome,
  tags: ['autodocs']
};

export const WelcomeComponent = () => (
  <BrowserRouter>
    <Welcome />
  </BrowserRouter>
);
