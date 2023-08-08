import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [notifyPopModal, setNotifyPopModal] = useState(false);

  const handleNotifyModal = () => {
    setNotifyPopModal((prev) => !prev);
  };
  const value = { handleNotifyModal, notifyPopModal };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

ModalContextProvider.propTypes = {
  children: PropTypes.node
};
