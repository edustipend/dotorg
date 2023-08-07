import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LearnerDashboard.module.css';

export const LearnerDashboard = () => {
  return (
    <div className={styles.main}>
      {/**Side-bar goes here */}
      <div className={styles.Outlet}>
        <Outlet />
      </div>
    </div>
  );
};
