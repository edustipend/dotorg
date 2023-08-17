import React, { useState, useEffect } from 'react';
import styles from './NoInternet.module.css';
import nointernetimg from '../../assets/nointernetimg.png';
import Button from '../Button';

const NoInternet = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log(isOnline);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return (
    <div className={`offline-message ${isOnline ? 'hidden' : ''} ${styles.container}`}>
      <div className={styles.main}>
        <img src={nointernetimg} alt="no internet image" className={styles.img} />
        <h3 className={styles.header}>No Internet Connection</h3>
        <p className={styles.text}>
          It appears you don't have an internet connection right now, We will attempt to automatically connect to your internet
        </p>
        <Button className={styles.btn} label="Try Again" type="secondary" size="small" />
      </div>
    </div>
  );
};

export default NoInternet;
