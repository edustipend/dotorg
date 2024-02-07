import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';
import { isApplicationWindowClosed } from '../utils';
import { useSelector } from 'react-redux';

const REQUEST_STIPEND_ROUTE = '/request';
const DASHBOARD_ROUTE = '/dashboard';

export const ButtonLabelCopy = {
  NOTIFY_ME: 'Notify me',
  REQUEST_STIPEND: 'Request stipend',
  GO_TO_DASHBOARD: 'Go to Dashboard'
};

const useHandleCTAClick = () => {
  const { handleNotifyModal } = useContext(ModalContext);
  const { isAuthenticated } = useSelector((state) => state.user);
  const nav = useNavigate();
  const isWindowClosed = isApplicationWindowClosed();

  const buttonLabel = isWindowClosed
    ? ButtonLabelCopy.NOTIFY_ME
    : isAuthenticated
    ? ButtonLabelCopy.GO_TO_DASHBOARD
    : ButtonLabelCopy.REQUEST_STIPEND;
    

  const handleCTAClick = () => {
    if (isWindowClosed) {
      handleNotifyModal();
    } else if (isAuthenticated) {
      nav(DASHBOARD_ROUTE);
    } else {
      nav(REQUEST_STIPEND_ROUTE);
    }
  };

  return {
    buttonLabel,
    handleCTAClick,
    isApplicationWindowClosed: isWindowClosed
  };
};

export default useHandleCTAClick;
