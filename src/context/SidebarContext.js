import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SidebarCtx = createContext();

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const value = { showSidebar, setShowSidebar };
  return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>;
};

SidebarProvider.propTypes = {
  children: PropTypes.node
};
