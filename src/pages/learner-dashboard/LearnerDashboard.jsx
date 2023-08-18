import { Outlet } from 'react-router-dom';
import styles from './LearnerDashboard.module.css';
import SideBar from '../../components/SideBar';
import { SidebarProvider } from '../../context/SidebarContext';

export const LearnerDashboard = () => {
  return (
    <SidebarProvider>
      <div className={styles.main}>
        <SideBar />
        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};
