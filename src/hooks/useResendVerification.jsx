import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalContext } from '../context/ModalContext';
import { VERIFY_LOGGED_IN_USER, authorizedPost } from '../services/ApiClient';
import toast from 'react-hot-toast';

const useResendVerification = () => {
  const { isVerified, email } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const { handleVerifyCurrentUser } = useContext(ModalContext);
  const [showBanner, setShowBanner] = useState(!isVerified);

  const handleResendVerification = async () => {
    setIsLoading(true);

    try {
      const res = await authorizedPost(VERIFY_LOGGED_IN_USER, {
        username: email
      });

      if (res?.message === 'Verification email sent succesfully') {
        toast.success(res?.message);
        handleVerifyCurrentUser();
      } else {
        toast.error(res?.message || res?.error?.message);
      }
    } catch (error) {
      toast.error(error?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
      setShowBanner(false);
    }
  };
  return { isLoading, setShowBanner, showBanner, handleResendVerification };
};

export default useResendVerification;
