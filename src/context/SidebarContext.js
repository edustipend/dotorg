import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SidebarCtx = createContext();

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const value = { setShowSidebar, showSidebar };
  return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>;
};

SidebarProvider.propTypes = {
  children: PropTypes.node
};
