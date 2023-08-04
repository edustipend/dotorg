import React, { useState } from 'react';
import styles from './Home.module.css';
import { constants } from './internals/constants';
import folder from '../../../assets/folder.png';
import hand from '../../../assets/waving hand.png';
import { tab } from './internals/constants';
import RecentApplication from './internals/RecentApplication';
import ApplicationHistory from './internals/ApplicationHistory';
const { dashboard, username } = constants;

export const Home = () => {
  const [currentTable, setCurrentTable] = useState(0);
  return (
    <div className={styles.Main}>
      <section className={styles.greet}>
        <div className={styles.imgContainer}>
          <img src={folder} alt="folder" className={styles.img} />
        </div>
        <div className={styles.userContainer}>
          <p className={styles.dashboard}>{dashboard}</p>
          <div className={styles.waveSection}>
            <p className={styles.hello}>Hello, {username}</p>
            <div className={`${styles.imgContainer} ${styles.imgAlt}`}>
              <img src={hand} alt="hand" className={styles.img} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quote}></section>
      <section className={styles.table}>
        <div className={styles.tabs}>
          {tab.map((itm, idx) => {
            return (
              <button
                key={idx}
                className={currentTable === idx ? `${styles.tab}` : `${styles.tab} ${styles.tabAlt}`}
                onClick={() => setCurrentTable(idx)}
              >
                {itm}
              </button>
            );
          })}
        </div>
        {(() => {
          switch (currentTable) {
            case 0:
              return <RecentApplication />;
            case 1:
              return <ApplicationHistory />;
            default:
              return <RecentApplication />;
          }
        })()}
      </section>
    </div>
  );
};
