import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

export default {
  title: 'Edustipend/Header',
  component: Header,
  tags: ['autodocs']
};

export const HeaderComponent = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
