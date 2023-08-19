import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar';
import { SidebarProvider } from '../../context/SidebarContext';

export default {
  title: 'Edustipend/COmponents/SideBar',
  component: SideBar,
  tags: ['autodocs']
};

export const SideBarSection = () => (
  <BrowserRouter>
    <SidebarProvider>
      <SideBar />
    </SidebarProvider>
  </BrowserRouter>
);
