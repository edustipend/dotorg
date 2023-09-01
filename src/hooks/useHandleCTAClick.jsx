import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';
import { isApplicationWindowClosed } from '../utils';

const REQUEST_STIPEND_ROUTE = '/request';

const useHandleCTAClick = () => {
  const { handleNotifyModal } = useContext(ModalContext);
  const nav = useNavigate();
  const isWindowClosed = isApplicationWindowClosed();

  const handleCTAClick = () => {
    if (isWindowClosed) {
      handleNotifyModal();
    } else {
      nav(REQUEST_STIPEND_ROUTE);
    }
  };

  return {
    handleCTAClick,
    isApplicationWindowClosed: isWindowClosed
  };
};

export default useHandleCTAClick;
