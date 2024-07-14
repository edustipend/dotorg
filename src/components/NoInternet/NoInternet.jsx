import React from 'react';
import styles from './NoInternet.module.css';
import nointernetimg from '../../assets/nointernetimg.png';
import Header from '../Header';
import Text from '../Text';

const NoInternet = () => {
  return (
    <div className={`offline-message ${styles.container}`}>
      <div className={styles.main}>
        <img src={nointernetimg} alt="no internet" className={styles.img} />
        <Header className={styles.header}>No Internet Connection</Header>
        <Text
          className={styles.text}
          content="It appears you don't have an internet connection right now, We will attempt to automatically connect to your internet."
        />
      </div>
    </div>
  );
};

export default NoInternet;
