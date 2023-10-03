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

export const LearnerDashboard = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarCtx);
  const [desktopScreen, setDesktopScreen] = useState(document.body.clientWidth);

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
    <div className={styles.main}>
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
  );
};
