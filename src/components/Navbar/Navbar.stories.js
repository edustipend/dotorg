import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

export default {
  title: 'Edustipend/Components/Navbar',
  component: Navbar,
  tags: ['autodocs']
};

export const NavbarComponent = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);
