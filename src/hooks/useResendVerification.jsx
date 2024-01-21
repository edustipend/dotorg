import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalContext } from '../context/ModalContext';

const useResendVerification = () => {
  const { isVerified } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsActive } = useContext(ModalContext);
  const [showBanner, setShowBanner] = useState(!isVerified);

  const handleResendVerification = async () => {
    setIsLoading(true);

    // API request
    // try {
    //   const res = await authorizedPost('user/reverify-email', {
    //     username: email
    //   });

    //   if (!res.success) {
    //     toast.error('Something went wrong! Try again.');
    //   }
    //   if (res.success) {
    //     toast.success('Verification email sent!');
    //     setIsActive(true);
    //   }
    // } catch (error) {
    //   toast.error('Something went wrong');
    // } finally {
    //   setIsLoading(false);
    //   setShowBanner(false);
    // }

    setTimeout(() => {
      setIsActive(true);
      setIsLoading(false);
      setShowBanner(false);
    }, 5000);
  };
  return { isLoading, setShowBanner, showBanner, handleResendVerification };
};

export default useResendVerification;
