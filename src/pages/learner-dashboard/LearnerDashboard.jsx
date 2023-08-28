// import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LearnerDashboard.module.css';
import SideBar from '../../components/SideBar';
import { SidebarCtx } from '../../context/SidebarContext';
import { Close, Menu } from '../../assets';
import { useContext } from 'react';
import { useEffect } from 'react';

export const LearnerDashboard = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarCtx);

  useEffect(() => {
    const desktopScreen = document.body.clientWidth >= 1024;
    desktopScreen && setShowSidebar(true);
  });

  return (
    <div className={styles.main}>
      <div>
        <SideBar />
        <div className={styles.menu} onClick={() => setShowSidebar(!showSidebar)}>
          <img src={showSidebar ? Close : Menu} alt="menu" />
        </div>
      </div>
      <div className={styles.Outlet}>
        <Outlet />
      </div>
    </div>
  );
};
