import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LearnerDashboard.module.css';
import SideBar from '../../components/SideBar';
import { SidebarCtx } from '../../context/SidebarContext';
import { Close, Menu } from '../../assets';
import { useContext } from 'react';
import { useEffect } from 'react';
import InstallPrompt from '../../components/InstallPrompt';
import SurveyBox from '../../components/SurveyBox';
import { SURVEY_LS_KEY } from './constants';
import Banner from '../../components/Banner';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
// import { postData } from '../../services/ApiClient';
// import toast from 'react-hot-toast';
import VerifyEmail from '../../components/ApplicationSteps/Step5Application/Internals/VerifyEmail';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../../components/Modal';

export const LearnerDashboard = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarCtx);
  const [desktopScreen, setDesktopScreen] = useState(document.body.clientWidth);
  const { isAdmin } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsActive } = useContext(ModalContext);
  const [showBanner, setShowBanner] = useState(!isAdmin);

  const handleSurveySuccess = () => {
    //TODO: Add logic to clean this up on the next application window
    localStorage.setItem(SURVEY_LS_KEY, 'true');
  };

  const handleResendVerification = async () => {
    setIsLoading(true);

    // API request
    // try {
    //   const res = await postData('', {
    //     username: email
    //   });

    //   if (!res.success) {
    //     toast.error('Failed to send! Try again.');
    //   }
    //   if (res.success) {
    //     toast.success('Verification email sent!');
    //     setIsActive(true);
    //   }
    // } catch (error) {
    //   toast.error('Something went wrong');
    // } finally {
    //   setIsLoading(false);
    //   setShowBanner(true);
    // }

    setTimeout(() => {
      setIsActive(true);
      setIsLoading(false);
      setShowBanner(false);
    }, 5000);
  };

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setDesktopScreen(newScreenWidth);
      setShowSidebar(newScreenWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowSidebar]);

  return (
    <>
      <div className={styles.main}>
        {showBanner && (
          <Banner type="alert" className={styles.banner}>
            <div className={styles.close} onClick={() => setShowBanner(false)}>
              <img src={Close} alt="closes" />
            </div>
            <h1>Hey there! 👋</h1>
            <p>We noticed your account hasn't been verified yet. Don't worry, it's a quick and easy process!</p>
            <p>Just take a moment to verify your account before the window closes.</p>

            <div className={styles.button}>
              <Button label={isLoading ? 'Verifying...' : 'Verify Now'} type="primary" effectAlt onClick={handleResendVerification} />
            </div>
          </Banner>
        )}
        <div>
          {desktopScreen && <SideBar />}
          <div className={styles.menu} onClick={() => setShowSidebar(!showSidebar)}>
            <img src={showSidebar ? Close : Menu} alt="menu" />
          </div>
        </div>
        <div className={styles.Outlet}>
          <Outlet />
        </div>
        <InstallPrompt />
        <SurveyBox show={!localStorage.getItem(SURVEY_LS_KEY)} onSuccess={handleSurveySuccess} />
      </div>
      <Modal>
        <VerifyEmail />
      </Modal>
    </>
  );
};
