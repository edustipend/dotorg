import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [notifyPopModal, setNotifyPopModal] = useState(false);
  const [verifyPopModal, setVerifyPopModal] = useState(false);
  const [newApplicationModal, setNewApplicationModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleNotifyModal = () => {
    setNotifyPopModal((prev) => !prev);
  };

  const handleEmailExistModal = () => {
    setIsActive((prev) => !prev);
  };

  const handleVerifyEmailModal = () => {
    setVerifyPopModal((prev) => !prev);
  }

  const handleNewApplicationModal = () => {
    setNewApplicationModal((prev) => !prev);
  }

  const value = { handleNotifyModal, notifyPopModal, verifyPopModal, isLoading, setIsLoading, isActive, handleEmailExistModal, setIsActive, handleVerifyEmailModal, newApplicationModal, handleNewApplicationModal };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

ModalContextProvider.propTypes = {
  children: PropTypes.node
};
