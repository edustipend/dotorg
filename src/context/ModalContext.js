import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [notifyPopModal, setNotifyPopModal] = useState(false);
  const [verifyPopModal, setVerifyPopModal] = useState(false);
  const [verifyCurrentUser, setVerifyCurrentUser] = useState(false);
  const [newApplicationModal, setNewApplicationModal] = useState(false);
  const [redirectModal, setRedirectModal] = useState(false);
  const [transactionModal, setTransactionModal] = useState(false);
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
  };

  const handleNewApplicationModal = () => {
    setNewApplicationModal((prev) => !prev);
  };

  const handleVerifyCurrentUser = () => {
    setVerifyCurrentUser((prev) => !prev);
  };

  const handleRedirectModal = () => {
    setRedirectModal((prev) => !prev);
  };

  const handleToggleTransactionModal = () => {
    setTransactionModal((prev) => !prev);
  };

  const value = {
    handleNotifyModal,
    notifyPopModal,
    verifyPopModal,
    isLoading,
    setIsLoading,
    isActive,
    handleEmailExistModal,
    setIsActive,
    handleVerifyEmailModal,
    newApplicationModal,
    verifyCurrentUser,
    handleVerifyCurrentUser,
    handleNewApplicationModal,
    redirectModal,
    handleRedirectModal,
    transactionModal,
    handleToggleTransactionModal
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

ModalContextProvider.propTypes = {
  children: PropTypes.node
};
