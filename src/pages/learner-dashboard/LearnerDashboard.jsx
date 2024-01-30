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
import { BANNER, SURVEY_LS_KEY, TestId } from './constants';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import VerifyEmail from '../../components/ApplicationSteps/Step5Application/Internals/VerifyEmail';
import Modal from '../../components/Modal';
import useResendVerification from '../../hooks/useResendVerification';

export const LearnerDashboard = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarCtx);
  const [desktopScreen, setDesktopScreen] = useState(document.body.clientWidth);
  const { handleResendVerification, isLoading, setShowBanner, showBanner } = useResendVerification();

  const handleSurveySuccess = () => {
    //TODO: Add logic to clean this up on the next application window
    localStorage.setItem(SURVEY_LS_KEY, 'true');
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
      <div className={styles.main} data-testid={TestId.LEARNER_DASHBOARD_WRAPPER}>
        {showBanner && (
          <Banner type={BANNER.ALERT} className={styles.banner}>
            <div className={styles.close} onClick={() => setShowBanner((prev) => !prev)}>
              <img src={Close} alt={BANNER.CLOSE} />
            </div>
            <h1>{BANNER.GREET}</h1>
            <p>{BANNER.TEXT1}</p>
            <p>{BANNER.TEXT2}</p>

            <div className={styles.button}>
              <Button
                label={isLoading ? BANNER.VERIFYING : BANNER.VERIFY}
                type={BANNER.PRIMARY}
                effectAlt
                onClick={handleResendVerification}
                disabled={isLoading}
              />
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
