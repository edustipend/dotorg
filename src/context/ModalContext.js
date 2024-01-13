import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [notifyPopModal, setNotifyPopModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleNotifyModal = () => {
    setNotifyPopModal((prev) => !prev);
  };

  const handleEmailExistModal = () => {
    setIsActive((prev) => !prev);
  };

  const value = { handleNotifyModal, notifyPopModal, isLoading, setIsLoading, isActive, handleEmailExistModal, setIsActive };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

ModalContextProvider.propTypes = {
  children: PropTypes.node
};
