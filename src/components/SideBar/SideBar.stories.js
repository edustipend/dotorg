import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar';
import { SidebarCtx } from '../../context/SidebarContext';
import { useState } from 'react';

export default {
  title: 'Edustipend/COmponents/SideBar',
  component: SideBar,
  tags: ['autodocs']
};

export const SideBarSection = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const value = { showSidebar, setShowSidebar };
  return (
    <BrowserRouter>
      <SidebarCtx.Provider value={value}>
        <SideBar />
      </SidebarCtx.Provider>
    </BrowserRouter>
  );
};
